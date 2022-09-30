import React from "react";
import { useEffect, useState, useRef } from "react";
import { getListOfContent } from "../../../redux/auth";
import { Card, Skeleton } from "antd";
import ListOfMainContent from "./ListOfMainContent";
let kt = 0;

const MainContent = (props) => {
  const [elementList, setList] = useState([]);
  const { data: dataContent } = props;
  useEffect(() => {
    handleList();
  }, [dataContent]);

  async function handleList() {
    let contentListx = dataContent.map(function (item, index) {
      return (
        <div>
          <Card title={`Content:  ${item.name}`} bordered={false}>
            <div className="flex items-center justify-between ">
              <ListOfMainContent
                key={index}
                dataContent={dataContent}
                indexContent={item.id}
              />
            </div>
          </Card>
        </div>
      );
    });

    setList(contentListx);
  }
  console.log(elementList);
  return <div>{elementList}</div>;
};
export default MainContent;
