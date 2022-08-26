import { Modal, Col, Row } from "antd";
import * as Yup from "yup";
import moment from "moment";

import { FastField, useFormik, FormikProvider, Field } from "formik";
import { useEffect } from "react";
import InputField from "../Input/InputField";
import InputDate from "../Input/InputDate";
const validateUserForm = Yup.object().shape({
  name: Yup.string().trim().required("Please input your Name"),
  id: Yup.string().trim().required("Please input your ID"),
  password: Yup.string().required("Required"),
  suspension: Yup.string().trim().required("Please input suspension"),
  contractStart: Yup.date()
    .required("Required")
    .min(moment(), "Min date is today")
    .max(Yup.ref("contractEnd"), "Max date is contract end"),
  contractEnd: Yup.date()
    .required("Required")
    .when(
      "contractStart",
      (contractStart, yupSchema) =>
        contractStart &&
        yupSchema.min(contractStart, "Min date is contract start")
    ),
});

const ModalAdd = (props) => {
  const handleOk = () => {
    props.onCancelModal();
  };
  const handleCancel = () => {
    props.onCancelModal();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      suspension: "",
      id: "",
      password: "",
      contractStart: moment(),
      contractEnd: moment(),
    },
    validationSchema: validateUserForm,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    //enableReinitialize: true,
  });
  const { errors, touched } = formik;
  useEffect(() => {}, [errors, touched]);

  return (
    <Modal
      title="Add User"
      visible={props.onModal}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <FormikProvider value={formik}>
        <Row>
          <Col span={11}>
            <Field
              id="name"
              label="Name"
              name="name"
              component={InputField}
              uppercase={true}
              onChange={(value) => {
                formik.setFieldValue("suspension", value.toUpperCase());
              }}
            />
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <FastField
              id="name"
              label="Suspension"
              name="suspension"
              component={InputField}
            />
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <FastField
              label="Contract Start"
              name="contractStart"
              component={InputDate}
            />
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <FastField
              label="Contract End"
              name="contractEnd"
              component={InputDate}
            />
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <FastField label="ID" name="id" component={InputField} />
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <FastField
              label="Password"
              name="password"
              component={InputField}
            />
          </Col>
        </Row>
      </FormikProvider>
    </Modal>
  );
};
export default ModalAdd;
