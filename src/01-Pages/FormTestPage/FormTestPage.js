import React from "react";
import * as Yup from "yup";
import Form from "../../00-Components/Form";

const formInputConfig = [
  {
    component: "input",
    label: "Name",
    name: "name",
    yupValidation: Yup.string().min(2, "Too Short!").required("Required"),
    initialValue: "Your Name",
  },
  {
    component: "input",
    label: "Age",
    name: "age",
    yupValidation: Yup.number().required("Required"),
    initialValue: "Age Number",
  },
];

const FormTestPage = () => {
  <div>
    <Form formConfig={formInputConfig} />
  </div>;
};

export default FormTestPage;
