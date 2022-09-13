import { Button, Modal, Tabs } from "antd";
import React, { useState } from "react";
import ContentGroup from "../UI/Layout/ContentGroup";

import UserInfor from "../UI/Layout/UserInfor";
const { TabPane } = Tabs;
const ModalInformationUser = (props) => {
  const handleOk = () => {
    props.onCancelModal();
  };
  const handleCancel = () => {
    props.onCancelModal();
  };
  // const [open, setOpen] = useState(false);

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal with customized button props
      </Button> */}
      <Modal
        title="Basic Modal"
        visible={props.onModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Tabs defaultActiveKey="1" style={{ marginLeft: "20px" }}>
          <TabPane tab="User Information" key="1">
            <UserInfor />
          </TabPane>
          <TabPane tab="Content group" key="2">
            <ContentGroup />
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default ModalInformationUser;
