//Deps
import React from "react";
//Components
import Form from "../../00-Components/Form";
import Logo from "../../00-Components/Logo";
import * as Yup from "yup";

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
const MainPage = () => {
  return (
    <>
      <Logo />
      <h1>
        Hor Form Component V<sub>1</sub>
      </h1>
      <div>
        <Form formConfig={formInputConfig} />
      </div>
    </>
  );
};

export default MainPage;
