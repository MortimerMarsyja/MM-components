import React from "react";
import * as Yup from "yup";
import Form from "../../00-Components/Form";

const formInputConfig = [
  {
    component: "input",
    label: "Name",
    name: "name",
    yupValidation: Yup.string().min(2, "Too Short!").required("Required"),
    initialValue: "",
  },
  {
    component: "input",
    label: "Age",
    name: "age",
    yupValidation: Yup.number().required("Required"),
    initialValue: "",
    dependency: "name",
  },
];

const FormTestPage = () => {
  return (
    <div>
      <Form formConfig={formInputConfig} />
    </div>
  );
};

export default FormTestPage;
