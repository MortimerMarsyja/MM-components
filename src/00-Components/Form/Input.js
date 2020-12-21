import React from "react";
import { ErrorMessage, Field } from "formik";
import TextField from "@material-ui/core/TextField";

const Input = ({ name, label, type = "text", required = false, ...props }) => {
  return (
    <div className="Input">
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        fullWidth
        type={type}
        helperText={<ErrorMessage name={name} />}
        {...props}
      />
    </div>
  );
};

export default Input;
