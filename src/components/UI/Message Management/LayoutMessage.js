import { Layout, Menu, Tabs } from "antd";
import { Link, Outlet } from "react-router-dom";
import PageTitle from "./PageTitle";
import SearchBox from "./SearchBox";
import LayoutSubMessage from "./LayoutSubMessage";
const { Header } = Layout;
const { Content } = Layout;
const { TabPane } = Tabs;
const LayoutMessage = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" style={{ marginLeft: "20px" }}>
        <TabPane tab="Page Title" key="1">
          <PageTitle />
        </TabPane>
        <TabPane tab="Search Box" key="2">
          <SearchBox />
        </TabPane>
        <TabPane tab="Layout" key="3">
          <LayoutSubMessage />
        </TabPane>
      </Tabs>
    </>
  );
};
export default LayoutMessage;
