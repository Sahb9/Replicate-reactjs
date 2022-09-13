//import { UserOutlined } from "@ant-design/icons";
import { Input, Row, Col, Pagination, Card } from "antd";
import { BiSearchAlt2, BiImage } from "react-icons/bi";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import React from "react";

function ContentService(props) {
  return (
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
        <div className="flex justify-center mt-2.5">
          <div layout="vertical" style={{ width: "80%" }}>
            <div className="text-sm font-medium">Search</div>
            <Input
              size="large"
              placeholder="Search"
              prefix={<BiSearchAlt2 className="w-10 h-10" />}
            />
          </div>
        </div>
        <div className=" flex justify-center items-center mt-2.5">
          <Pagination defaultCurrent={6} total={600} showSizeChanger />
        </div>
        {props.items.map((item) => (
          <div
            className=" flex flex-col p-2 md:flex-row md:p-0xmmfdd items-center gap-1 mt-2.5 bg-white"
            key={item.id}
          >
            <Card className="flex items-center">
              <BiImage style={{ width: "120px", height: "112px" }} />
            </Card>
            <div id="content" className="col-start-2 col-span-4">
              <div
                className="text-sm font-bold"
                style={{ fontStyle: "roboto" }}
              >
                {item.title}
              </div>
              <div
                className="text-sm font-bold"
                style={{ fontStyle: "roboto" }}
              >
                {item.author}
              </div>
              <p className="font-light" style={{ fontStyle: "roboto" }}>
                {item.content}
              </p>
            </div>
            <div
              id="btn"
              className="flex flex-col justify-center gap-1 font-bold mr-4"
            >
              <button
                style={{
                  backgroundColor: "#72D498",
                  width: "146px",
                  height: "33px",
                }}
                className="flex items-center gap-1 justify-evenly rounded"
              >
                <RiErrorWarningLine className="w-4 h-4" />
                <div className=" text-lg text-white font-sans">
                  Show Details
                </div>
              </button>
              <button
                style={{
                  backgroundColor: "#F0AD4E",
                  width: "146px",
                  height: "33px",
                }}
                className="flex items-center gap-1 justify-evenly rounded"
              >
                <IoBookOutline className="w-4 h-4" />
                <div className=" text-lg text-white font-sans">
                  Display Book
                </div>
              </button>
            </div>
          </div>
        ))}
        {/* <div className="flex flex-row gap-1 mt-10 bg-white">
          <Card className="flex items-center">
            <BiImage style={{ width: "112px", height: "112px" }} />
          </Card>
          <div id="content" className="col-start-2 col-span-4">
            <div className="text-sm font-bold" style={{ fontStyle: "roboto" }}>
              Title
            </div>
            <div className="text-sm font-bold" style={{ fontStyle: "roboto" }}>
              {" "}
              Author
            </div>
            <p className="font-light" style={{ fontStyle: "roboto" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi...
            </p>
          </div>
          <div
            id="btn"
            className="flex flex-col justify-center gap-1 font-bold mr-4"
          >
            <div
              style={{
                backgroundColor: "#72D498",
                width: "146px",
                height: "33px",
              }}
              className="flex items-center gap-1 justify-evenly rounded"
            >
              <RiErrorWarningLine className="w-4 h-4" />
              <div className=" text-lg text-white font-sans">Show Details</div>
            </div>
            <div
              style={{
                backgroundColor: "#F0AD4E",
                width: "146px",
                height: "33px",
              }}
              className="flex items-center gap-1 justify-evenly rounded"
            >
              <IoBookOutline className="w-4 h-4" />
              <div className=" text-lg text-white font-sans">Display Book</div>
            </div>
          </div>
        </div> */}
      </Col>
      <Col span={4}></Col>
    </Row>
  );
}

export default ContentService;
