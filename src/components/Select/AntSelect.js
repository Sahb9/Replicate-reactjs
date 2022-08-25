import { Select, Typography } from "antd";
const { Option } = Select;
const { Text } = Typography;
function AntSelect(props) {
  return (
    <div style={{ position: "relative", bottom: "50px" }}>
      <Text type="secondary">Show</Text>
      <Select
        defaultValue="10"
        style={{
          width: 60,
        }}
      >
        <Option value="10">10</Option>
        <Option value="20">20</Option>
      </Select>
      <Text type="secondary">records</Text>
    </div>
  );
}
export default AntSelect;
