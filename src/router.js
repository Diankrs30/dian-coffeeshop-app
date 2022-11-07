import { createBrowserRouter } from "react-router-dom";

import Error from "./pages/error/Error";
import Home from "./pages/home/Index";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Product from "./pages/product/Product";
import ForgotPwd from "./pages/forgot-pwd/Forgot-pwd";
import ProductDetail from "./pages/product-detail/ProductDetail";
import History from "./pages/history/History";
import DetailTransaction from "./pages/detail-transaction/DetailTransaction";
import AddProduct from "./pages/addProduct/AddProduct";
import AddPromo from "./pages/addPromo/Addpromo";
import EditProduct from "./pages/editProduct/EditProduct.js";
import Cart from "./pages/cart/Cart";

import PrivateElement from "./components/privateElement/PrivateElement";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/profile", element: <Profile /> },
  {
    path: "/product",
    element: (
      <PrivateElement allowedRoles={["user", "admin"]}>
        <Product />
      </PrivateElement>
    ),
  },
  { path: "/forgot-password", element: <ForgotPwd /> },
  { path: "/detail-product/:id", element: <ProductDetail /> },
  {
    path: "/history",
    element: (
      <PrivateElement allowedRoles={["user"]}>
        <History />
      </PrivateElement>
    ),
  },
  { path: "/detail-transaction", element: <DetailTransaction /> },
  { path: "/add-product", element: <AddProduct /> },
  { path: "/edit-product", element: <EditProduct /> },
  { path: "/add-promo", element: <AddPromo /> },
  { path: "/cart", element: <Cart /> },
]);

export default router;
