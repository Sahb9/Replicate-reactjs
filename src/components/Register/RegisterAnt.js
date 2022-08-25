import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  AutoComplete,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import * as Yup from "yup";
//import { useFormik, ErrorMessage } from "formik";
//const { Sider } = Layout;
const { Option } = Select;
const { List } = Form;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 10,
      offset: 0,
    },
    sm: {
      span: 10,
      offset: 8,
    },
  },
};
const validateUserForm = Yup.object().shape({
  email: Yup.string()
    .required("Required")
    .email("Invalid Email")
    .min(15, "Must be 15 characters or more"),
  password: Yup.string()
    .required("Required")
    .min(8, "Min length 8")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z_@./#&+-]{8,}$/,
      "At least 1 number, at least 1 lowercase, at least 1 uppercase"
    ),
  rePassword: Yup.string().required("Required"),
  //.oneOf([Yup.ref("password"), null], "Passwords must match"),
});
const RegisterAnt = () => {
  const onFinish = (values) => {
    alert(JSON.stringify(values, null, 2));
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  console.log(websiteOptions);

  const yupSync = {
    async validator({ field }, value) {
      await validateUserForm.validateSyncAt(field, { [field]: value });
    },
  };
  return (
    <Row>
      <Col span={6}></Col>
      <Col span={12}>
        <Form
          layout="vertical"
          //{...formItemLayout}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
              yupSync,
            ]}
          >
            <Input className="input" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              yupSync,
            ]}
            hasFeedback
          >
            <Input.Password className="input" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
              //yupSync,
            ]}
          >
            <Input.Password className="input" />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input className="input" />
          </Form.Item>

          <List
            name="phone"
            //label="Phone Numbers"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            {/* <Input
              className="input"
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            /> */}

            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    //{...(index === 0 )}
                    label={index === 0 ? "Phone numbers" : ""}
                    required={false}
                    key={field.key}
                  >
                    <div className="flex items-center gap-0">
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please input passenger's name or delete this field.",
                          },
                        ]}
                        noStyle
                      >
                        <Input placeholder="Phone number" />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </div>
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{
                      width: "100%",
                    }}
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add("The head item", 0);
                    }}
                    style={{
                      width: "100%",
                      marginTop: "20px",
                    }}
                    icon={<PlusOutlined />}
                  >
                    Add field at head
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </List>
          <Form.Item
            name="donation"
            label="Donation"
            rules={[
              {
                required: true,
                message: "Please input donation amount!",
              },
            ]}
          >
            <InputNumber
              className="input"
              addonAfter={suffixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="website"
            label="Website"
            rules={[
              {
                required: true,
                message: "Please input website!",
              },
            ]}
          >
            <AutoComplete
              options={websiteOptions}
              onChange={onWebsiteChange}
              placeholder="website"
            >
              <Input className="input" />
            </AutoComplete>
          </Form.Item>

          <Form.Item
            name="intro"
            label="Intro"
            rules={[
              {
                required: true,
                message: "Please input Intro",
              },
            ]}
          >
            <Input.TextArea showCount className="input-textarea" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Captcha"
            extra="We must make sure that your are a human."
          >
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Please input the captcha you got!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={6}></Col>
    </Row>
  );
};

export default RegisterAnt;
