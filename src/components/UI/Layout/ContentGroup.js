import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import React from "react";

import { Table } from "antd";
import { getAllContent } from "../../../redux/auth";
import ModalDetailsGroup from "../../Modal/ModalDetailsGroup";
const columns = [
  {
    title: "ID group content",
    dataIndex: "id",
    key: "id",
    render: (text) => (
      <div>
        <ModalDetailsGroup style={{ cursor: "pointer" }}>
          {text}
        </ModalDetailsGroup>
      </div>
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Number of contents",
    dataIndex: "number_of_contents_to_display",
    key: "number_of_contents_to_display",
  },
];
const ContentGroup = () => {
  //const dispatch = useDispatch();
  const data = useSelector(function(state) {
    //console.log("useSelector", test2++);
    return state.auth.userData;
  });
  const [dataContent, setContent] = useState([]);
  useEffect(() => {
    getAllContent({ domain: data.domain })
      .then((res) => {
        console.log(res);
        setContent(res.response.data);
      })
      .catch((e) => {
        console.log("that bai", e);
      });
  }, []);

  //console.log("data is", dataContent);
  //console.log("data is x2", dataContent.data);

  return (
    <div>
      <Table
        rowKey={(r) => r.id}
        columns={columns}
        pagination={{
          position: ["none", "bottomCenter"],
          pageSize: 7,
        }}
        dataSource={dataContent}
      />
    </div>
  );
};
export default ContentGroup;
