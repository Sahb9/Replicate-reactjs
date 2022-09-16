import { Tabs } from "antd";
import React from "react";

import PageTitle from "./PageTitle";
import SearchBox from "./SearchBox";
import LayoutSubMessage from "./LayoutSubMessage";

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
