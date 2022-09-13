import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterAnt from "./components/Register/RegisterAnt";
import Login from "./components/Login/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import LayoutUserGroup from "./components/UI/User Group Management/LayoutUserGroup";
import LayoutAdmin from "./components/UI/User Management/LayoutAdmin";
import LayoutMessage from "./components/UI/Message Management/LayoutMessage";
import PageTitle from "./components/UI/Message Management/PageTitle";
import SearchBox from "./components/UI/Message Management/SearchBox";
import LayoutSubMessage from "./components/UI/Message Management/LayoutSubMessage";
import LayoutAPI from "./components/UI/Layout/LayoutAPI";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/userGroup" element={<LayoutUserGroup />} />
            <Route path="/manageUser" element={<LayoutAdmin />} />
            <Route path="/manageMessage" element={<LayoutMessage />} />
            <Route path="/API" element={<LayoutAPI />} />
            <Route path="/pageTitle" element={<PageTitle />} />
            <Route path="/searchBox" element={<SearchBox />} />
            <Route path="/layout" element={<LayoutSubMessage />} />

            <Route path="/register" element={<RegisterAnt />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
