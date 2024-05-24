import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import AddRecipes from "../pages/AddRecipes";
import BuyCoin from "../pages/BuyCoin";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-recipes",
        element: <AddRecipes />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/buy-coin",
        element: <BuyCoin />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

console.log("Routing hitted");

export default router;
