import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";

import ToDoListPage from "./pages/ToDoListPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import { IToDo } from "./models/todo-item";
import NotFound from "./pages/404";
import ItemDescription from "./pages/ItemDescription";
import Lyaout from "./latouts/Lyaout";

const todos: IToDo[] = [
  {
    id: 0,
    text: "Первое действие",
    isDone: false,
  },
  {
    id: 1,
    text: "Второе действие",
    isDone: true,
  },
  {
    id: 2,
    text: "Третье действие",
    isDone: false,
  },
  {
    id: 3,
    text: "Четвертое действие",
    isDone: true,
  },
];

// новый подход
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Lyaout />,
      errorElement: <NotFound />,
      // то, что рендериться в Outlet
      children: [
        {
          path: "/",
          element: <HomePage todos={todos} />,
        },
        {
          path: "/todo",
          element: <ToDoListPage />,
        },
        {
          path: "/list/:id",
          element: <ItemDescription todos={todos} />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  { basename: "/app/" }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);
