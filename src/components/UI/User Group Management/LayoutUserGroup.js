import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import ModalDelete from "../../Modal/ModalDelete";
import { useState } from "react";

import { BsCircle } from "react-icons/bs";
import { Layout, Menu, Button, Input, Space, Table } from "antd";
import React from "react";
import AntSelect from "../../Select/AntSelect";

import ModalAddGroup from "../../Modal/ModalAddGroup";
const { Header, Sider, Content } = Layout;
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    //render: (text) => <a>{text}</a>,
  },
  {
    title: "Display title",
    dataIndex: "display",
    key: "display",
  },
  {
    title: "Domain",
    dataIndex: "domain",
    key: "domain",
  },
  {
    title: "Created Date",
    dataIndex: "createdDate",
    key: "createdDate",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      // console.log(record)
      <ModalDelete dataName={record.title}>
        <Space size="middle">
          <MdDeleteOutline className="w-8 h-8" style={{ cursor: "pointer" }} />
        </Space>
      </ModalDelete>
    ),
  },
];
const data = [
  {
    key: "1",
    title: "UserGroup 1",
    display: "title",
    createdDate: "03/06/2020 15:26 PM",
    domain: "abcxyz.com",
  },
  {
    key: "2",
    title: "UserGroup 2",
    display: "title",
    createdDate: "03/06/2020 15:26 PM",
    domain: "abcxyz.com",
  },

  {
    key: "3",
    title: "UserGroup 3",
    display: "title",
    createdDate: "03/06/2020 15:26 PM",
    domain: "abcxyz.com",
  },
  {
    key: "4",
    title: "UserGroup 4",
    display: "title",
    createdDate: "03/06/2020 15:26 PM",
    domain: "abcxyz.com",
  },
  {
    key: "5",
    title: "UserGroup 5",
    display: "title",
    createdDate: "03/06/2020 15:26 PM",
    domain: "abcxyz.com",
  },
  {
    key: "6",
    title: "UserGroup 6",
    display: "title",
    createdDate: "03/06/2020 15:26 PM",
    domain: "abcxyz.com",
  },
  {
    key: "7",
    title: "UserGroup 7",
    display: "title",
    createdDate: "03/06/2020 15:26 PM",
    domain: "abcxyz.com",
  },
  {
    key: "8",
    title: "UserGroup 8",
    display: "title",
    createdDate: "03/06/2020 15:26 PM",
    domain: "abcxyz.com",
  },
  {
    key: "9",
    title: "UserGroup 9",
    display: "title",
    createdDate: "03/06/2020 15:26 PM",
    domain: "abcxyz.com",
  },
  {
    key: "10",
    title: "UserGroup 10",
    display: "title",
    createdDate: "03/06/2020 15:26 PM",
    domain: "abcxyz.com",
  },
];
const LayoutAdmin = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const cancelModal = () => {
    setIsModalVisible(false);
  };
  return (
    <Layout className="site-layout">
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <div className="flex justify-between items-center mb-1.5">
          <div className="">
            <Button
              type="primary"
              icon={<AiOutlineUserAdd />}
              size="medium"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={showModal}
            >
              Add user group
            </Button>
            {isModalVisible && (
              <ModalAddGroup
                onModal={isModalVisible}
                onCancelModal={cancelModal}
              />
            )}
          </div>
          <Input
            size="medium"
            placeholder="Search"
            prefix={<BiSearchAlt2 className="" />}
            style={{ width: "50%" }}
          />
        </div>
        <Table
          columns={columns}
          pagination={{
            position: "bottomRight",
          }}
          dataSource={data}
        />
        <AntSelect></AntSelect>
      </Content>
    </Layout>
  );
};

export default LayoutAdmin;
