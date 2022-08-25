import React from "react";
import { Layout, Col, Row, Button } from "antd";
import { PageHeader } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
const { Header, Footer, Content } = Layout;

function LayoutJS() {
  let history = useNavigate();
  return (
    <>
      <Layout>
        <Header>
          <Row
            style={{ display: "flex", justifyContent: "flex-end" }}
            gutter={16}
          >
            <Col span={2}>
              <Button type="primary">
                <Link to="/login">Login</Link>
              </Button>
            </Col>
            <Col span={2}>
              <Button type="primary" danger>
                <Link to="/register">Register</Link>
              </Button>
            </Col>
          </Row>
        </Header>
        <PageHeader
          className="site-page-header"
          onBack={() => {
            history("/", { replace: true });
          }}
          title="Home"
          subTitle=""
        />
        <Content>
          <Outlet />
        </Content>

        <Footer>Fotter</Footer>
      </Layout>
    </>
  );
}

export default LayoutJS;
