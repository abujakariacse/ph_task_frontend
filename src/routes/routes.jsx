import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddRecipes from "../pages/AddRecipes";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import NotFound from "../pages/NotFound";
import PurchaseCoin from "../pages/PurchaseCoin";
import Payment from "../pages/Payment";
import RecipeDetail from "../pages/RecipeDetail";

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
        path: "/recipes/:id",
        element: <RecipeDetail />,
      },
      {
        path: "/purchase-coin",
        element: <PurchaseCoin />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
