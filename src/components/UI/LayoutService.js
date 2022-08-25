import React from "react";
import { Layout, Col, Row, Button } from "antd";
import { PageHeader } from "antd";
import { BiUserCircle } from "react-icons/bi";

import { BsCircle } from "react-icons/bs";
import ContentService from "../ContentService";

//import { Link } from "react-router-dom";

function LayoutService() {
  const DATA = [
    {
      id: "e1",
      title: "Title",
      author: "Author",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi...`,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Title",
      author: "Author",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi...`,
    },
    {
      id: "e3",
      title: "Title",
      author: "Author",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi...`,
    },
    {
      id: "e4",
      title: "Title",
      author: "Author",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi...`,
    },
    {
      id: "e5",
      title: "Title",
      author: "Author",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi...`,
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center bg-white">
        <div className="flex  flex-row items-center">
          <BsCircle className="w-10 h-10" />
          <div className="text-sm font-medium">Service Title</div>
        </div>
        <div></div>
        <div>
          <BiUserCircle className="w-10 h-10" />
        </div>
      </div>

      <div>
        <ContentService items={DATA}></ContentService>
      </div>
    </>
  );
}

export default LayoutService;
