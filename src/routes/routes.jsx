import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Authorization from "../pages/authorization/Authorization";
import Registration from "../pages/registration/Registration";
import FullName from "../pages/fullname/Fullname";
import Success from "../pages/success/Success";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/fullname" element={<FullName />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}
