import { Modal, Col, Row, Divider, Radio, Space, Form, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import * as Yup from "yup";
import { FastField, useFormik, FormikProvider } from "formik";
import { useState } from "react";
import InputField from "../Input/InputField";

const validateUserForm = Yup.object().shape({
  name: Yup.string().trim().required("Please input your Name"),
  staffId: Yup.string().trim().required("Please input your ID"),
  maxUser: Yup.number().required("Required").nullable(),
  session: Yup.number().required("Required").nullable(),
  ipnumber: Yup.array().when(["."], (ipnumber) => {
    return Yup.array().of(
      Yup.string()
        .required("Required")
        .matches(/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/, "Invalid IP Address")
        .test("unique", "IP Address is duplicated", (values) => {
          return new Set(ipnumber).size === ipnumber.length;
        })
    );
  }),
});

const ModalAddGroup = (props) => {
  const handleOk = () => {
    props.onCancelModal();
  };
  const handleCancel = () => {
    props.onCancelModal();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      maxUser: null,
      staffId: "",
      session: null,
      ipnumber: [],
    },
    validationSchema: validateUserForm,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    //enableReinitialize: true,
  });
  const [valueradio, setValueRadio] = useState(false);
  const onChange = (e) => {
    console.log(valueradio);
    if (e.target.value === "password") {
      setValueRadio(false);
    } else if (e.target.value === "address") {
      setValueRadio(true);
    }
  };
  const formIP = (
    <Form
      name="dynamic_form_nest_item"
      //  onFinish={onFinish}
      layout="horizontal"
      autoComplete="off"
    >
      <Form.List name="users" className="mr-2">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }, index) => (
              <Space className="test" key={key} align="baseline">
                <FastField
                  id="ipnumber"
                  name={`ipnumber.${key}`}
                  component={InputField}
                />

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
  return (
    <Modal
      title="Add User"
      visible={props.onModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <FormikProvider value={formik}>
        <Row>
          <Col span={11}>
            <FastField
              id="name"
              label="Name"
              name="name"
              component={InputField}
            />
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <FastField
              id="maxUser"
              label="Max User"
              name="maxUser"
              component={InputField}
            />
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <FastField
              id="staffId"
              label="Staff ID"
              name="staffId"
              component={InputField}
            />
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <FastField
              id="session"
              label="Session"
              name="session"
              component={InputField}
            />
          </Col>
        </Row>

        <Divider orientation="left" className="font-medium">
          Authentication by
        </Divider>
        <Radio.Group onChange={onChange} defaultValue="password">
          <Space direction="vertical">
            <Radio value="password">Id/Password</Radio>
            <Radio value="address">IP address</Radio>
          </Space>
        </Radio.Group>
        {valueradio && formIP}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </FormikProvider>
    </Modal>
  );
};
export default ModalAddGroup;
