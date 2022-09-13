import { Col, Card, Row } from "antd";
import { useState, useEffect } from "react";
import { authActions, postData } from "../../../redux/auth";
import { useDispatch, useSelector } from "react-redux";
import { FastField, FormikProvider, useFormik, Form } from "formik";
import InputField from "../../Input/InputField";
import ModalInformationUser from "../../Modal/ModalInformationUser";
import axios from "axios";
import React from "react";

const initialValues = {
  client_ip_address: "",
  company_domain: "",
};
const LayoutAPI = () => {
  const dispatch = useDispatch();
  //  const [valueData, setData] = useState(null);
  const isAuth = useSelector((state) => state.auth.loginStatus);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://geolocation-db.com/json/");
      //console.log(res.data);
      formikLogin.setFieldValue("client_ip_address", res.data.IPv4);
    };
    getData();
  }, []);
  const formikLogin = useFormik({
    initialValues: initialValues,
    //validationSchema: validateLoginForm,
    onSubmit: async (values) => {
      // console.log(values);
      postData(values)
        .then((result) => {
          console.log(result.response.data);

          dispatch(authActions.login(result.response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  const { setValues, handleSubmit } = formikLogin;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    // console.log(isModalVisible);
    setIsModalVisible(true);
  };
  const cancelModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div style={{ height: "100vh" }} className="flex justify-center">
        <Card style={{ width: 500 }}>
          <FormikProvider value={formikLogin}>
            <h1 className="title text-3xl flex justify-center">Login</h1>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col span={24}>
                  <FastField
                    component={InputField}
                    label="Client IP"
                    name="client_ip_address"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FastField
                    component={InputField}
                    label="Company Domain"
                    name="company_domain"
                  />
                </Col>
              </Row>
              <div className="flex justify-center">
                <button
                  className="ring-2 ring-blue-500 rounded-md p-2"
                  type="submit"
                  onClick={showModal}
                >
                  Loggin
                </button>
              </div>
              {isAuth ? (
                <ModalInformationUser
                  onModal={isModalVisible}
                  onCancelModal={cancelModal}
                />
              ) : (
                ""
              )}
            </Form>
          </FormikProvider>
          {/* <ToastContainer /> */}
        </Card>
      </div>
    </>
  );
};
export default LayoutAPI;
