import { Modal, Table } from "antd";

import { useState, useEffect } from "react";
import { getDetailOfContent } from "../../redux/auth";
import { useSelector } from "react-redux";

import React from "react";
const ModalDetailsGroup = (props) => {
  const columns = [
    {
      title: "ID Details",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
  ];
  const { children } = props;
  const [visible, setVisible] = useState(false);
  const [dataContent, setContent] = useState([]);
  const data = useSelector(function(state) {
    //console.log("useSelector", test2++);
    return state.auth.userData;
  });
  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    getDetailOfContent({ id: children, domain: data.domain })
      .then((res) => {
        // console.log(res.data.data.content);
        setContent(res.response.data.content);
      })
      .catch((e) => {
        console.log("that bai", e);
      });
  }, [children]);
  // console.log("data is", dataContent);

  return (
    <div>
      <a onClick={showModal}>{children}</a>
      <Modal
        title="Details of Group ID"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        footer={null}
      >
        <Table
          rowKey={(r) => r.id}
          columns={columns}
          pagination={{
            position: ["none", "none"],
            pageSize: 7,
          }}
          dataSource={dataContent}
        />
      </Modal>
    </div>
  );
};

export default ModalDetailsGroup;
