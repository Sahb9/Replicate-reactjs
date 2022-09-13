import { Modal } from "antd";
import React from "react";

import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;
const showDeleteConfirm = (name) => {
  console.log(name);
  confirm({
    title: (
      <div className="flex justify-center">
        <p className="font-bold">Are you sure</p>
      </div>
    ),
    icon: <ExclamationCircleOutlined style={{ fontSize: "62px" }} />,
    content: (
      <div className="flex justify-center">
        <p>
          You want to delete <span className="font-bold">{name} ?</span>
        </p>
      </div>
    ),
    okText: "Cancel",
    okType: "danger",
    cancelText: "Yes,delete it",

    onOk() {
      console.log("OK");
    },

    onCancel() {
      console.log("Cancel");
    },
  });
};
const ModalDelete = (props) => {
  //console.log(props);

  return (
    <div onClick={() => showDeleteConfirm(props.dataName)}>
      {props.children}
    </div>
  );
};
export default ModalDelete;
