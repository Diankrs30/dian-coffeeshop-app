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

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/profile", element: <Profile /> },
  { path: "/product", element: <Product /> },
  { path: "/forgot-password", element: <ForgotPwd /> },
  { path: "/detail-product/:id", element: <ProductDetail /> },
  { path: "/history", element: <History /> },
  { path: "/detail-transaction", element: <DetailTransaction /> },
]);

export default router;
