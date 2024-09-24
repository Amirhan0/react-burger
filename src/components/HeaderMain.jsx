import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const HeaderMain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  function navigation(link) {
    navigate(link);
  }

  const getIconClass = (link) =>
    activeLink === link ? "bg-[#B28C2E]" : "bg-transparent";

  return (
    <header className="fixed bottom-0 left-0 w-full bg-[#18171C] p-4 rounded-t-2xl shadow-lg">
      <div className="flex justify-around items-center h-full">
        <div className="flex items-center p-2 rounded-full">
          <div
            className={`flex items-center justify-center ${getIconClass("/home")}`}
            onClick={() => navigation("/home")}
          >
            <img
              src="/home.svg"
              alt="Home"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
        </div>
        <div className="flex items-center p-2 rounded-full">
          <div
            className={`flex items-center justify-center ${getIconClass("/orders")}`}
            onClick={() => navigation("/orders")}
          >
            <img
              src="/orders.svg"
              alt="Orders"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
        </div>
        <div className="flex items-center p-2 rounded-full">
          <div
            className={`w-14 h-14 flex items-center justify-center rounded-lg ${getIconClass("/cart")}`}
            onClick={() => navigation("/cart")}
          >
            <img
              src="/cart.svg"
              alt="Cart"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
        </div>
        <div className="flex items-center p-2 rounded-full">
          <div
            className={`flex items-center justify-center ${getIconClass("/profile")}`}
            onClick={() => navigation("/profile")}
          >
            <img
              src="/profile.svg"
              alt="Profile"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
