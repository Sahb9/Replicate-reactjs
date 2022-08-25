import { Modal, Col, Row } from "antd";
import * as Yup from "yup";

import { FastField, useFormik, FormikProvider } from "formik";
import InputField from "../Input/InputField";
import AntSelectField from "../Select/AntSelectField";
import AntSelectOperation from "../Select/AntSelectOperation";
const validateUserForm = Yup.object().shape({
  label: Yup.string().trim().required("Please input your Label"),
  match: Yup.string().trim().required("Please input your match"),
});
const ModalSearchBox = (props) => {
  const handleOk = () => {
    props.onCancelModal();
  };
  const handleCancel = () => {
    props.onCancelModal();
  };
  const formik = useFormik({
    initialValues: {
      label: "",
      match: "",
    },
    validationSchema: validateUserForm,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal
      title="ADD SEARCH BOX"
      visible={props.onModal}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <FormikProvider value={formik}>
        <Row>
          <Col span={11}>
            <AntSelectField />
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <FastField
              id="label"
              label="Label"
              name="label"
              component={InputField}
            />
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <AntSelectOperation></AntSelectOperation>
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <FastField
              id="match"
              label="Match Values"
              name="match"
              component={InputField}
            />
          </Col>
        </Row>
      </FormikProvider>
    </Modal>
  );
};
export default ModalSearchBox;
