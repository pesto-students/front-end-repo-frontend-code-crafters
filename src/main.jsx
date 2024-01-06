import React from "react";
import { createRoot } from "react-dom/client";
import store from "./app/store.js";
import { Provider } from "react-redux";
import "./index.css";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </>
);
