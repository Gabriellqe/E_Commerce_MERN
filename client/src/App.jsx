import { useRoutes } from "react-router-dom";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products/:category", element: <ProductList /> },
    { path: "/product/:id", element: <Product /> },
    { path: "/cart", element: <Cart /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return routes;
};
export default App;
