import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/404";
import Lyaout from "./latouts/Layout";
import ToDoListPage from "./pages/ToDoListPage";
import ViewList from "./pages/ViewList";
import ViewListItem from "./pages/ViewListItem";

// новый подход
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Lyaout />,
      errorElement: <NotFound />,
      // то, что рендериться в Outlet
      children: [
        {
          path: "/",
          element: <ToDoListPage />,
        },

        {
          path: "/list",
          element: <ViewList />,
        },

        {
          path: "/list/:id",
          element: <ViewListItem />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]
  // { basename: "/to-do-ts/" } // если выкладывать на ghpages, то можно оставить, а так можно удалить
);
