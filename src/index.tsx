import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import ToDoListPage from "./pages/ToDoListPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDoListPage />
  </React.StrictMode>
);
