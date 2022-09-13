import { Select, Typography } from "antd";
import React from "react";

const { Option } = Select;
const { Text } = Typography;
function AntSelectOperation(props) {
  return (
    <>
      <label className="font-medium">Operation</label>

      <div>
        <Select
          defaultValue="0"
          style={{
            width: 200,
          }}
        >
          <Option value="0">Seould</Option>
          <Option value="1">Tokyo</Option>
          <Option value="2">VietNam</Option>
        </Select>
      </div>
    </>
  );
}
export default AntSelectOperation;
