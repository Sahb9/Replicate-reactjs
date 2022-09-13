import { Modal, Col, Row, Switch, Input, Button } from "antd";
import React from "react";

import * as Yup from "yup";
import moment from "moment";
import { useState } from "react";

import { FastField, useFormik, FormikProvider, Field } from "formik";
import { useEffect } from "react";
import InputField from "../Input/InputField";
import InputDate from "../Input/InputDate";
import InputGroup from "../Input/InputGroup";
const validateUserForm = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Please input your Name"),
  id: Yup.string()
    .trim()
    .required("Please input your ID"),
  email: Yup.string()
    .email()
    .required("Email invalid"),
  password: Yup.string().required("Required"),
  suspension: Yup.string()
    .trim()
    .required("Please input suspension"),
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
  const [valueEmail, setvalueEmail] = useState("689@gmail.com");
  const [valuetemp, setValueTemp] = useState(valueEmail);
  const [valueinput, setInput] = useState(false);
  const [valuedisable, setDisable] = useState(true);

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
      email: valueEmail,
      id: "",
      password: "",
      contractStart: moment(),
      contractEnd: moment(),
    },
    validationSchema: validateUserForm,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { errors, touched, setFieldValue } = formik;
  useEffect(() => {}, [errors, touched]);
  function handleInputChange() {
    setDisable(!valuedisable);

    setInput(true);
  }
  function handleInputCancel() {
    setInput(false);

    setValueTemp(valueEmail);
    setDisable(!valuedisable);
    setFieldValue("email", valueEmail);
  }
  function handleInputSave() {
    setDisable(!valuedisable);
    setvalueEmail(formik.values.email);
    setValueTemp(formik.values.email);

    setInput(false);
    setFieldValue("email", formik.values.email);
  }
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
        <Row>
          <Col span={16}>
            <Field
              label="Email"
              name="email"
              component={InputGroup}
              onCancelClick={handleInputCancel}
              onSaveClick={handleInputSave}
              onChangeClick={handleInputChange}
              valueDisable={valuedisable}
              valueinput={valueinput}
            />
          </Col>

          {/* <Col
            span={11}
            style={{ display: "flex" }}
            className="items-center mt-2"
          >
          
          </Col> */}
        </Row>
      </FormikProvider>
    </Modal>
  );
};
export default ModalAdd;
