import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Country from "./pages/Country";
const router = createBrowserRouter([
  {
    path: "",
    element: (
      <div className="h-full dark:bg-secondary  bg-gray-100">
        <div className="h-full grid grid-rows-[auto_1fr]">
          <Header />
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: ":country",
        element: <Country />,
        children: [
          {
            path: ":country",
            element: <Country />,
          },
        ],
      },
    ],
  },
]);

function Root() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Root;
