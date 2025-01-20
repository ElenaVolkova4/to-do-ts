import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";

import { router } from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* новый подход роутинга через RouterProvider, роуты создаются в объекте через createBrowserRouter*/}
      <RouterProvider router={router} />
      {/* устаревший подход роутинга через BrowserRouter, Routes и Route*/}
      {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage todos={todos} />} />
        <Route path="/todo" element={<ToDoListPage />} />
        <Route path="/list/:id" element={<ItemDescription todos={todos} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter> */}
    </Provider>
  </React.StrictMode>
);
