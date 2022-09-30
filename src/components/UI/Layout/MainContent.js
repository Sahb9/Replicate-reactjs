import React from "react";
import { useEffect, useState, useRef } from "react";
import { getListOfContent } from "../../../redux/auth";
import { Card, Skeleton, Spin } from "antd";
import ListOfMainContent from "./ListOfMainContent";
import LazyLoad from "react-lazyload";
let kt = 0;

const Loading = () => (
  <div className="post loading">
    {/* <Spin size="large" /> */}
    <Skeleton active />
  </div>
);

const MainContent = (props) => {
  const [elementList, setList] = useState([]);
  const { data: dataContent } = props;
  useEffect(() => {
    handleList();
  }, [dataContent]);

  async function handleList() {
    let contentListx = dataContent.map(function(item, index) {
      return (
        <LazyLoad
          key={index}
          //height={100}
          once
          offset={[-10, 100]}
          placeholder={<Loading />}
        >
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
        </LazyLoad>
      );
    });

    setList(contentListx);
  }
  console.log(elementList);
  return <div>{elementList}</div>;
};
export default MainContent;
