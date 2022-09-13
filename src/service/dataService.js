import axios from "axios";
import { useSelector } from "react-redux";

const EVENT_API_BASE_URL = "https://dev-api.689cloud.com/urss-be-dev/api/v1";

const DataService = () => {
  let data = useSelector((state) => state.auth.userData);

  // const getDataUser = async () => {
  //   return await axios.get(EVENT_API_BASE_URL + "/auth/info", {
  //     headers: {
  //       "x-access-token": localStorage.getItem("x-access-token"),
  //     },
  //   });
  // };

  // async function postData(event) {
  //   return await axios.post(
  //     EVENT_API_BASE_URL + "/auth/ip-address-login",
  //     event
  //   );
  // }
  // async function deleteEvent(eventId) {
  //   return await axios.delete(EVENT_API_BASE_URL + "/delete/" + eventId);
  // }
};

export const getDataUser = async () => {
  return await axios.get(EVENT_API_BASE_URL + "/auth/info", {
    headers: {
      // "x-access-token": data.access_token,
    },
  });
};
export const postData = async (event) => {
  return await axios.post(EVENT_API_BASE_URL + "/auth/ip-address-login", event);
};
//export const getData = { getDataUser };
//export const postDataLogin = { postData };
//export default new DataService();
