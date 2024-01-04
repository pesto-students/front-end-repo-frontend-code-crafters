import React from "react";
import { createRoot } from "react-dom/client";
import store from "./app/store.js";
import { Provider } from "react-redux";
import "./index.css";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </>
);
