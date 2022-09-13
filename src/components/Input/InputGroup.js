import { ErrorMessage } from "formik";
import { useState } from "react";
import React from "react";

import { Input, Button } from "antd";
const InputGroup = (props) => {
  const {
    field,
    form,
    label,
    onChange: myOnChange,
    uppercase,
    valueDisable,
    valueSave,
    valueinput,
    onCancelClick,
    onSaveClick,
    onChangeClick,
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
    console.log(valueSave);

    if (name === "email" && valueSave) {
      console.log(event.target.value);
      //setValueTemp();
      form.setFieldValue("email", event.target.value);
    } else if (name === "email" && !valueSave) {
      //form.setFieldValue("email", valuetemp);
    }
  }

  return (
    <div className="flex items-center">
      <div>
        {label && <label className="font-medium">{label}</label>}

        <Input
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={handleValues}
          disabled={valueDisable}
        />
      </div>
      <div>
        <Input.Group style={{ display: "flex", marginTop: "24px" }}>
          {!valueinput ? (
            <Button type="primary" onClick={onChangeClick}>
              Change
            </Button>
          ) : (
            <>
              <Button type="danger" onClick={onCancelClick}>
                Cancel
              </Button>
              <Button type="primary" onClick={onSaveClick}>
                Save
              </Button>
            </>
          )}
        </Input.Group>
      </div>

      <p className="text-red-600">
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};
export default InputGroup;
