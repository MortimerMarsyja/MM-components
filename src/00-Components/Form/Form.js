import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import HorButton from "../../00-Components/HorButton";
import StyledForm from "./form.style";

const configSchema = (formConfig) => {
  let schema = {};
  formConfig.forEach((validationItem) => {
    schema = {
      ...schema,
      ...{ [validationItem["name"]]: validationItem["yupValidation"] },
    };
  });
  let formatedSchema = Yup.object().shape({ ...schema });
  return formatedSchema;
};

const getInitialValues = (formConfig) => {
  let initValues = {};
  formConfig.forEach((initialValue) => {
    initValues = {
      ...initValues,
      ...{ [initialValue["name"]]: initialValue["initialValue"] },
    };
  });
  return initValues;
};

const componentRenderer = (component, componentParams) => {
  const availableComponents = {
    input: () => (
      <Input
        name={componentParams.name}
        label={componentParams.label}
        required
      />
    ),
  };
  return availableComponents[component]();
};

const FormikForm = ({ formConfig }, props) => {
  const [validations, setValidations] = useState();
  const [initialValues, setInitialValues] = useState();
  useEffect(() => {
    setValidations(configSchema(formConfig));
    setInitialValues(getInitialValues(formConfig));
  }, [formConfig.length]);

  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <StyledForm>
      <h1>Test Form</h1>
      {validations && initialValues && (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validations}
          {...props}
        >
          {({ dirty, isValid }) => {
            return (
              <Form className="form-component">
                {formConfig.map((input) => {
                  return componentRenderer(input.component, {
                    name: input.name,
                    label: input.label,
                  });
                })}
                <div className="form-component_input-container">
                  <HorButton
                    disabled={!dirty || !isValid}
                    type="submit"
                    body="send"
                  >
                    Send
                  </HorButton>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </StyledForm>
  );
};

export default FormikForm;
