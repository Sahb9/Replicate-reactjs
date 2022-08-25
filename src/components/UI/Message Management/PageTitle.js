import InputField from "../../Input/InputField";
import { FastField } from "formik";
import { Input, Button } from "antd";

const PageTitle = () => {
  return (
    <>
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
    </>
  );
};
export default PageTitle;
