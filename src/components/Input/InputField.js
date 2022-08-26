import { ErrorMessage } from "formik";

import { Input } from "antd";
const InputField = (props) => {
  const { field, label, onChange: myOnChange, uppercase } = props;
  const { name, value, onChange, onBlur } = field;

  function handleValues(event) {
    console.log(event);
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
  }

  return (
    <>
      {label && <label className="font-medium">{label}</label>}

      <Input
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={handleValues}
      />
      <p className="text-red-600">
        <ErrorMessage name={name} />
      </p>
    </>
  );
};
export default InputField;
