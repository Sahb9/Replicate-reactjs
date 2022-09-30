//import LayoutJS from "./components/UI/LayoutJS";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import React from "react";
//import LayoutAdmin from "./components/UI//User Management/LayoutAdmin";
//import LayoutService from "./components/UI/LayoutService";
import LayoutUserGroup from "./components/UI/User Group Management/LayoutUserGroup";
import { Layout } from "antd";
import Sider from "./components/Sider/Sider";
import EventComponent from "./Test API Event/EventComponent";
import GoogleLoginButton from "./Test API Event/LoginGoogle";
import TestReactQuery from "./components/Test React Query/TestReactQuery";
import TestLazyLoading from "./Test API Event/TestLazyLoading";
const { Content } = Layout;
function App() {
  return (
    <>
      <Layout>
        <Header />
        <Layout>
          <Sider />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      {/* <TestLazyLoading></TestLazyLoading> */}
      {/* <TestReactQuery></TestReactQuery> */}
    </>
  );
}

export default App;
