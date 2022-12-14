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
import EditPromo from "./pages/editPromo/EditPromo";

import PrivateElement from "./components/privateElement/PrivateElement";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/profile",
    element: (
      <PrivateElement allowedRoles={["user", "admin"]}>
        <Profile />
      </PrivateElement>
    ),
  },
  {
    path: "/product",
    element: <Product />,
  },
  { path: "/forgot-password", element: <ForgotPwd /> },
  {
    path: "/detail-product/:id",
    element: (
      <PrivateElement allowedRoles={["user", "admin"]}>
        <ProductDetail />
      </PrivateElement>
      
    ),
  },
  {
    path: "/history",
    element: (
      <PrivateElement allowedRoles={["user"]}>
        <History />
      </PrivateElement>
    ),
  },
  {
    path: "/detail-transaction",
    element: (
      <PrivateElement allowedRoles={["user", "admin"]}>
        <DetailTransaction />
      </PrivateElement>
    ),
  },
  {
    path: "/add-product",
    element: (
      <PrivateElement allowedRoles={["admin"]}>
        <AddProduct />
      </PrivateElement>
    ),
  },
  {
    path: "/edit-product",
    element: (
      <PrivateElement allowedRoles={["admin"]}>
        <EditProduct />
      </PrivateElement>
    ),
  },
  {
    path: "/add-promo",
    element: (
      <PrivateElement allowedRoles={["admin"]}>
        <AddPromo />
      </PrivateElement>
    ),
  },
  {
    path: "/edit-promo",
    element: (
      <PrivateElement allowedRoles={["admin"]}>
        <EditPromo />
      </PrivateElement>
    ),
  },
  {
    path: "/cart",
    element: (
      <PrivateElement allowedRoles={["admin", "user"]}>
        <Cart />
      </PrivateElement>
    ),
  },
]);

export default router;
