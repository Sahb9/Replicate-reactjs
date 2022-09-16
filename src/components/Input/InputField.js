import { ErrorMessage } from "formik";

import React from "react";

import { Input } from "antd";
const InputField = (props) => {
  const {
    field,

    label,
    onChange: myOnChange,
    uppercase,
    valueDisable,
    valueSave,
  } = props;
  const { name, value, onChange, onBlur } = field;

  function handleValues(event) {
    //  console.log(event);
    let customeEvent = {
      target: {
        value: uppercase
          ? event.target.value.toUpperCase()
          : event.target.value,
        name,
      },
    };

    onChange(customeEvent);

    if (myOnChange) {
      myOnChange(event.target.value);
    }
    // console.log(valueSave);

    // if (name === "email" && valueSave) {
    //   console.log(event.target.value);
    //   //setValueTemp();
    //   form.setFieldValue("email", event.target.value);
    // } else if (name === "email" && !valueSave) {
    //   //form.setFieldValue("email", valuetemp);
    // }
  }

  return (
    <div>
      {label && <label className="font-medium">{label}</label>}

      <Input
        name={name}
        value={value}
        onBlur={onBlur}
        //value={props.value}
        onChange={handleValues}
        disabled={valueDisable}
      />
      <p className="text-red-600">
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};
export default InputField;
