import { Input, Button } from "antd";
import React from "react";

const PageTitle = () => {
  return (
    <div style={{ height: "545px" }} className="flex flex-col justify-between">
      <div className="flex flex-col">
        <label className="font-medium">Title of search page</label>
        <Input style={{ width: "50%" }} />
      </div>
      <div className="flex justify-end gap-4">
        <Button style={{ backgroundColor: "#E2E2E2" }} size="large">
          Cancel
        </Button>
        <Button style={{ backgroundColor: "#839C97" }} size="large">
          Save
        </Button>
      </div>
    </div>
  );
};
export default PageTitle;
