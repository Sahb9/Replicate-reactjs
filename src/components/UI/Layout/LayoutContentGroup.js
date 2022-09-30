import React from "react";
import { getContentGroup } from "../../../redux/auth";
import { useEffect, useState } from "react";
import MainContent from "./MainContent";

let arrayItems = [];
const LayoutContentGroup = () => {
  const [value, setValue] = useState([]);

  const fetchDataFunction = async () => {
    const fetchData = await getContentGroup();
    //console.log(fetchData);
    setValue(fetchData.response.data);
  };
  useEffect(() => {
    fetchDataFunction();
  }, []);
  let contentListx = [];
  if (value !== undefined) {
    //console.log(value);
  }
  // console.log(value);
  return (
    <div>
      <MainContent data={value} />
    </div>
  );
};
export default LayoutContentGroup;
