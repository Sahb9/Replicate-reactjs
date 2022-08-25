import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import "./Sider.css";
const Sider = () => {
  return (
    <Layout.Sider className="minw-220">
      <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
        <Menu.Item key="1">
          <Link to="/userGroup">User Group Managements</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/manageUser">Users Managements</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/manageMessage">Message Management</Link>
        </Menu.Item>
        <Menu.Item key="4">Others</Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};
export default Sider;
