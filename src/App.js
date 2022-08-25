//import LayoutJS from "./components/UI/LayoutJS";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

//import LayoutAdmin from "./components/UI//User Management/LayoutAdmin";
//import LayoutService from "./components/UI/LayoutService";
import LayoutUserGroup from "./components/UI/User Group Management/LayoutUserGroup";
import { Layout } from "antd";
import Sider from "./components/Sider/Sider";

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
    </>
  );
}

export default App;
