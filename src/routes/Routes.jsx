import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeCards from "../components/CoffeeCards";
import CardDetail from "../components/CardDetail";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch("/coffees.json"),
          },
          {
            path: "/cardsCategory/:categoryName",
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch("/coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("/coffees.json"),
      },
      {
        path: "/cardDetail/:cardId",
        element: <CardDetail></CardDetail>,
        loader: () => fetch("/coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default myRouter;
