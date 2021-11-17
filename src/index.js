import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer
        draggable={false}
        position={toast.POSITION.TOP_CENTER}
        transition={Zoom}
      />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
