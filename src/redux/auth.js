import { createSlice } from "@reduxjs/toolkit";
import httpRequest from "../service/httpRequest";
import axios from "axios";

const EVENT_API_BASE_URL = "https://dev-api.689cloud.com/urss-be-dev/api/v1";

const initialAuthState = {
  userData: {},
  loginStatus: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      //console.log(action);
      state.loginStatus = true;
      localStorage.setItem("x-access-token", action.payload.access_token);
    },
    getInforUser(state, action) {
      console.log(action);
      state.userData = action.payload;
      console.log(state.userData);
    },
    logout(state) {
      state.loginStatus = false;
    },
  },
});
export const getDataUser = async () => {
  try {
    const response = await httpRequest({
      url: "/auth/info",
      method: "GET",
    });
    return { response };
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    return { error };
  }
  // return await axios.get(EVENT_API_BASE_URL + "/auth/info", {
  //   headers: {
  //     "x-access-token": localStorage.getItem("x-access-token"),
  //   },
  // });
};
export const postData = async (dataUser) => {
  try {
    const response = await httpRequest({
      url: "/auth/ip-address-login",
      method: "POST",
      data: dataUser,
    });
    if (response.status === 200) {
      localStorage.setItem("x-access-token", response.data.access_token);
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return { response };
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    return { error };
  }
  // return await axios.post(EVENT_API_BASE_URL + "/auth/ip-address-login", event);
};
export const getAllContent = async (params) => {
  const { domain } = params;

  try {
    const response = await httpRequest({
      url: "/content-group/content-group-list",
      method: "GET",
      params: {
        domain: domain,
      },
    });
    return { response };
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    return { error };
  }

  // return await axios.get(
  //   EVENT_API_BASE_URL +
  //     "/content-group/content-group-list?domain=urss1.689cloud.com",
  //   {
  //     headers: {
  //       "x-access-token": localStorage.getItem("x-access-token"),
  //     },
  //   }
  // );
};
export const getDetailOfContent = async (params) => {
  const { id, domain } = params;

  try {
    const response = await httpRequest({
      url: "/content/public/page",
      method: "GET",
      params: {
        content_group_id: id,
        domain: domain,
        page: 1,
        size: 4,
      },
    });
    return { response };
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    return error;
  }

  // return await axios.get(
  //   EVENT_API_BASE_URL +
  //     "/content/public/page?content_group_id=" +
  //     id +
  //     "&domain=urss1.689cloud.com&page=1&size=4"
  // );
};
export const authActions = authSlice.actions;
export default authSlice.reducer;
