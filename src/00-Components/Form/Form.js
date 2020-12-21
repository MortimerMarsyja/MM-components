import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import HorButton from "../../00-Components/HorButton";
import StyledForm from "./form.style";

const isMissing = (value) => {
  return value === undefined || null || "" ? true : false;
};

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

const checkValidation = (dependency, filledList) => {
  if (dependency) {
    return !filledList.includes(dependency);
  } else {
    return false;
  }
};

const handleKeyUp = (value, dependency, filledList, setFilledList) => {
  if (!isMissing(value) && !filledList.includes(dependency)) {
    setFilledList([...filledList, dependency]);
  }
  if (value === "" && filledList.length > 0) {
    setFilledList(filledList.filter((listVal) => listVal !== dependency));
  }
};

const componentRenderer = (
  component,
  componentParams,
  filledList,
  setFilledList
) => {
  const availableComponents = {
    input: () => (
      <Input
        name={componentParams.name}
        label={componentParams.label}
        onKeyUp={(e) =>
          handleKeyUp(
            e.target.value,
            componentParams.name,
            filledList,
            setFilledList
          )
        }
        disabled={checkValidation(componentParams.dependency, filledList)}
        required
      />
    ),
  };
  return availableComponents[component]();
};

const FormikForm = ({ formConfig }, props) => {
  const [filledList, setFilledList] = useState([]);
  const [validations, setValidations] = useState();
  const [initialValues, setInitialValues] = useState();
  useEffect(() => {
    setValidations(configSchema(formConfig));
    setInitialValues(getInitialValues(formConfig));
  }, [formConfig.length]);
  useEffect(() => {
    console.log(filledList);
  }, [filledList]);

  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <StyledForm>
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
                  return componentRenderer(
                    input.component,
                    {
                      name: input.name,
                      label: input.label,
                      dependency: input.dependency,
                    },
                    filledList,
                    setFilledList
                  );
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
