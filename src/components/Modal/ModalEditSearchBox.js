import { useState } from "react";
import React from "react";

import { Modal, Col, Row, Select, Button } from "antd";
import { FastField, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import InputField from "../Input/InputField";
import TagRender from "../Tags/TagRender";
const { Option } = Select;
const validateUserForm = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Please input your Label"),
  staffId: Yup.string()
    .trim()
    .required("Please input your ID"),
  maxUser: Yup.number()
    .required("Required")
    .nullable(),
  session: Yup.number()
    .required("Required")
    .nullable(),
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
const options = [
  {
    value: "Title",
  },
  {
    value: "Author",
  },
  {
    value: "Keywords",
  },
  {
    value: "cyan",
  },
];
const ModalEditSearchBox = (props) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };
  const formik = useFormik({
    initialValues: {
      label: "",
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

  return (
    <div>
      <div onClick={showModal}>{props.children}</div>

      <Modal
        title="EDIT SEARCH BOX"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="EDIT SEARCH BOX"
        cancelText="CANCEL"
        width={800}
      >
        <FormikProvider value={formik}>
          <Row>
            <Col span={11}>
              <label className="font-medium">Search Field</label>
              <Select
                mode="multiple"
                showArrow
                tagRender={TagRender}
                defaultValue={["Title", "Author", "Keywords"]}
                style={{
                  width: "100%",
                }}
                options={options}
              />
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <FastField label="Label" name="label" component={InputField} />
            </Col>
          </Row>
          <Row cl>
            <Col span={11} style={{ display: "flex", flexDirection: "column" }}>
              <label className="font-medium">Operation</label>
              <Select
                showSearch
                placeholder="Match Mutiple Choice"
                optionFilterProp="children"
                //onChange={onChange}
                //onSearch={onSearch}
                defaultValue={"edu"}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value="edu">Education</Option>
                <Option value="science">Science</Option>
                <Option value="bio">Biology</Option>
              </Select>
            </Col>
            <Col span={2}></Col>
            <Col span={11}></Col>
          </Row>
          <Row>
            {/* <Col span={11}> */}
            <Button type="primary" className="mt-2.5">
              Primary Button
            </Button>
            {/* </Col> */}
          </Row>
          <Row>
            <Col span={11}>
              <FastField
                id="key1"
                label="Key 1"
                name="key1"
                component={InputField}
              />
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <FastField
                id="matchvalues1"
                label="Match values 1"
                name="matchvalues1"
                component={InputField}
              />
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <FastField
                id="key2"
                label="Key 2"
                name="key2"
                component={InputField}
              />
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <FastField
                id="matchvalues2"
                label="Match values 2"
                name="matchvalues2"
                component={InputField}
              />
            </Col>
          </Row>
        </FormikProvider>
      </Modal>
    </div>
  );
};
export default ModalEditSearchBox;
