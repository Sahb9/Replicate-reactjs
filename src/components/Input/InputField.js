import { ErrorMessage } from "formik";

import { Input } from "antd";
const InputField = (props) => {
  const { field, label } = props;
  const { name, value, onChange, onBlur } = field;

  return (
    <>
      {label && <label className="font-medium">{label}</label>}

      <Input name={name} value={value} onBlur={onBlur} onChange={onChange} />
      <p className="text-red-600">
        <ErrorMessage name={name} />
      </p>
    </>
  );
};
export default InputField;
