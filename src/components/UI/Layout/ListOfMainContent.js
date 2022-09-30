import React from "react";
import { Skeleton } from "antd";
import { getListOfContent } from "../../../redux/auth";
import { StepBackwardFilled, StepForwardFilled } from "@ant-design/icons";
import { useState, useEffect } from "react";
const ListOfMainContent = (props) => {
  // const [onBack, setBack] = useState(false);
  // const [onNext, setNext] = useState(true);
  const [perPage, setPage] = useState(1);
  const [arrayItems, setArrayItems] = useState([{}]);
  const [contentPerPage, setPerContent] = useState([]);
  const { dataContent, indexContent } = props;
  const fetchDataListContentFunction = async (params) => {
    return await getListOfContent(params);
  };
  useEffect(() => {
    handleAllData();
  }, [dataContent, perPage]);

  useEffect(() => {
    handleList();
  }, [arrayItems]);
  async function handleData() {
    let tempArr = [];
    //for (const key in dataContent) {
    const result = await fetchDataListContentFunction({
      id: indexContent, //dataContent[key].id,
      perPage: perPage,
    });
    // console.log(
    //   "id of datacontent" + dataContent[key].id + " id index " + indexContent
    // );
    tempArr = [
      ...tempArr,
      {
        id: indexContent, //dataContent[key].id,
        content: result.response.data.content,
        total_pages: result.response.data.total_pages,
      },
    ];
    //}
    return tempArr;
  }
  async function handleAllData() {
    const result = await handleData();
    console.log(result);

    setArrayItems(result);
  }

  async function handleList() {
    console.log(arrayItems);
    // if (arrayItems.length > 1) {
    let contentListx = arrayItems.map((valueContent, mainindex) => {
      console.log(valueContent);
      if (valueContent && valueContent.content)
        return valueContent.content.map((valueSub, index) => {
          console.log(valueSub);
          return (
            <div key={index}>
              <div className="border-8 ml-0.5">
                <img
                  src="http://cloud-librarystg.keyring.net/contents/77/778391c218a44830a2b39daf6382ddcb_thumb"
                  alt={`Content:  ${valueSub.name}`}
                  width="100"
                  height="100"
                />
              </div>
              <p className="text-center">
                Content {index + 1} and
                <p className="font-bold">id: {valueSub.id}</p>
              </p>
            </div>
          );
        });
    });

    setPerContent(contentListx);
    //}
  }
  function handleBack() {
    console.log("back");
    console.log(perPage);
    if (perPage !== 1) {
      //perPage--;
      setPage((perPage) => perPage - 1);
    }
  }
  function handleForward() {
    console.log("next");
    console.log(perPage);
    console.log("total", arrayItems[0].total_pages);
    if (perPage < arrayItems[0].total_pages) {
      setPage((perPage) => perPage + 1);
      //return;
    }
  }
  return (
    <>
      {perPage !== 1 && (
        <StepBackwardFilled
          onClick={handleBack}
          className="hover"
          style={{ fontSize: "50px" }}
        />
      )}

      {contentPerPage.length === 0 ? (
        <Skeleton.Image active className=" ml-0.5" />
      ) : (
        <div className="flex gap-1 items-center justify-start w-full">
          {contentPerPage}
        </div>
      )}
      {perPage < arrayItems[0].total_pages && (
        <StepForwardFilled
          onClick={handleForward}
          className="hover"
          style={{ fontSize: "50px" }}
        />
      )}

      {/* {contentPerPage.length === 0 && (
        <Skeleton.Image active className=" ml-0.5" />
      )} */}
    </>
  );
};
export default ListOfMainContent;
