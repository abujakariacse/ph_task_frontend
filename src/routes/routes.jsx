import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddRecipes from "../pages/AddRecipes";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import NotFound from "../pages/NotFound";
import PurchaseCoin from "../pages/PurchaseCoin";
import RecipeDetail from "../pages/RecipeDetail";
import PaymentSuccess from "../pages/PaymentSuccess";
import PaymentFailed from "../pages/PaymentFailed";

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
        path: "/payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment-failed",
        element: <PaymentFailed />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
