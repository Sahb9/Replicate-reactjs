import { Menu, Layout } from "antd";
import React from "react";

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
        <Menu.Item key="4">
          <Link to="/API">API</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/contentGroup">Content Group</Link>
        </Menu.Item>
        <Menu.Item key="6">Others</Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};
export default Sider;
