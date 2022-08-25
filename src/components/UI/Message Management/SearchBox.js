import { Space, Table, Button } from "antd";
import ModalDelete from "../../Modal/ModalDelete";
import { MdDeleteOutline } from "react-icons/md";
import AntSelect from "../../Select/AntSelect";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import ModalSearchBox from "../../Modal/ModalSearchBox";
import ModalEditSearchBox from "../../Modal/ModalEditSearchBox";

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
      <div className="flex justify-center">
        <ModalDelete dataName={record.title}>
          <Space size="middle">
            <MdDeleteOutline
              className="w-8 h-8"
              style={{ cursor: "pointer" }}
            />
          </Space>
        </ModalDelete>
        <ModalEditSearchBox>
          <Space size="middle">
            <FaRegEdit className="w-8 h-8" style={{ cursor: "pointer" }} />
          </Space>
        </ModalEditSearchBox>
      </div>
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

const SearchBox = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const cancelModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button
        type="primary"
        size="medium"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={showModal}
      >
        Add Search Box
      </Button>
      {isModalVisible && (
        <ModalSearchBox onModal={isModalVisible} onCancelModal={cancelModal} />
      )}

      <Table
        columns={columns}
        pagination={{
          position: "bottomRight",
        }}
        dataSource={data}
      />
      <AntSelect />
    </>
  );
};
export default SearchBox;
