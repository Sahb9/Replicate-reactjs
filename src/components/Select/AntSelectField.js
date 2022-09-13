import { Select, Typography } from "antd";
import React from "react";

const { Option } = Select;
const { Text } = Typography;
function AntSelectField(props) {
  return (
    <>
      <label className="font-medium">Search Field</label>
      <div>
        <Select
          defaultValue="1"
          style={{
            width: 200,
          }}
        >
          <Option value="1">Education</Option>
          <Option value="2">Science</Option>
          <Option value="3">Biology</Option>
        </Select>
      </div>
    </>
  );
}
export default AntSelectField;
