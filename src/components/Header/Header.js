import { BsCircle } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
const Header = () => {
  return (
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
  );
};
export default Header;
