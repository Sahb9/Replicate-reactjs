import { ErrorMessage } from "formik";
//import { FormGroup } from "reactstrap";
import moment from "moment";
import React from "react";

import { Input, DatePicker } from "antd";
const InputDate = (props) => {
  const { field, label, form } = props;
  const { name, value, onChange, onBlur } = field;
  // const { errors, touched } = form;
  // const showError = errors[name] && touched[name];
  const dateFormat = "DD/MM/YYYY";
  //  console.log(value);
  return (
    //   {label && <label for={name}>{label}</label>}
    <>
      <label>{label}</label>
      <DatePicker
        format={dateFormat}
        name={name}
        value={value}
        onBlur={onBlur}
        // onChange={onChange}
        onChange={(value) => {
          console.log("onchange", field);
          form.setFieldValue(name, moment(value));
        }}
      />

      <p className="text-red-600">
        <ErrorMessage name={name} />
      </p>
    </>
  );
};
export default InputDate;
