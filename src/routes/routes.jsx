import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Authorization from "../pages/Authorization";
import Registration from "../pages/Registration";
import FullName from "../pages/Fullname";
import Success from "../pages/Success";
import MainPage from "../components/MainPage";
import Profile from "../pages/Profile";
import Orders from "../pages/Orders";
import Favorite from "../pages/Favorite";
import Checkout from "../pages/Checkout";
import AddProducts from "../pages/AddProduct";
import ProductDetails from "../pages/ProductDetails";
ProductDetails;
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/fullname" element={<FullName />} />
      <Route path="/success" element={<Success />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/addproducts" element={<AddProducts />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
}
