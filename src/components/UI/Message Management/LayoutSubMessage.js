import { Space, Table, Button, Divider } from "antd";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import ModalEditTabLayout from "../../Modal/ModalEditTabLayout";
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Number of Search Box",
    dataIndex: "number",
    key: "number",
    align: "center",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div className="flex justify-center items-center">
        {/* <ModalDelete dataName={record.title}> */}
        <Space size="middle">
          <FaTrashAlt className="text-xl" style={{ cursor: "pointer" }} />
        </Space>
        {/* </ModalDelete> */}
        <ModalEditTabLayout>
          <Space size="middle">
            <FaRegEdit className="text-xl" style={{ cursor: "pointer" }} />
          </Space>
        </ModalEditTabLayout>
      </div>
    ),
    align: "center",
  },
];
const data = [
  {
    key: "1",
    number: "1",
    title: "UserGroup 1",
  },
  {
    key: "2",
    number: "2",

    title: "UserGroup 2",
  },

  {
    key: "3",
    number: "3",

    title: "UserGroup 3",
  },
  {
    key: "4",
    number: "4",

    title: "UserGroup 4",
  },
  {
    key: "5",
    number: "5",

    title: "UserGroup 5",
  },
  {
    key: "6",
    number: "6",

    title: "UserGroup 6",
  },
  {
    key: "7",
    number: "7",

    title: "UserGroup 7",
  },
  {
    key: "8",
    number: "8",

    title: "UserGroup 8",
  },
  {
    key: "9",
    number: "9",
    title: "UserGroup 9",
  },
  {
    key: "10",
    number: "10",
    title: "UserGroup 10",
  },
];
const LayoutSubMessage = () => {
  return (
    <>
      <Divider orientation="left">Tab Layouts</Divider>
      <div className="gap-1">
        <Button type="primary" className="mr-1">
          ADD TAB
        </Button>
        <Button type="primary">PREVIEW</Button>
      </div>
      <Table columns={columns} dataSource={data} />
      <Divider orientation="left">Search Result</Divider>
    </>
  );
};
export default LayoutSubMessage;
