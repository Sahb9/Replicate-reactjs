import { useSelector, shallowEqual } from "react-redux";
import { authActions, getDataUser } from "../../../redux/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import React from "react";

let test1 = 1;
let test2 = 1;

const UserInfor = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getDataUser()
      .then((result) => {
        console.log(result);
        //   console.log("thanh cong");
        dispatch(authActions.getInforUser(result.response.data));
      })
      .catch((result) => {
        console.log("that bai", result);
      });
  }, [dispatch]);

  const data = useSelector(function(state) {
    //console.log("useSelector", test2++);
    return state.auth.userData;
  });
  // console.log(data);

  return (
    <div>
      <div className="font-medium">Name: {data.name} </div>
      <div className="font-medium">company_id:{data.company_id}</div>
      <div className="font-medium">domain: {data.domain}</div>
      <div className="font-medium">token_api_key: {data.token_api_key}</div>
      <div className="font-medium">id: {data.id}</div>
      <div className="font-medium">role_level: {data.role_level}</div>

      <div></div>
    </div>
  );
};
export default UserInfor;
