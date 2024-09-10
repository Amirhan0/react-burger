import { Route, Routes } from "react-router-dom";
import { Authorization } from "../pages/authorization/authorization";
import Login from "../pages/login/Login";
import { Registration } from "../pages/registration/Registration";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/authorization" element={<Authorization />} />
    </Routes>
  );
}
