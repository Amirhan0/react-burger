import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeaderWelcome = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    }
  }, []);
  return (
    <>
      <div className="flex flex-row justify-between items-center p-4">
        <div className="flex flex-1 items-center">
          <p className="text-4xl text-white font-bold">
            {user ? `Привет, ${user.nameUser}` : "Пользователь..."}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <img src="/search.svg" alt="Search" className="w-6 h-6" />
          {user && (
            <img
              src={user.image}
              alt={user.nameUser}
              className="w-10 h-10 rounded-full"
              onClick={() => navigate('/profile')}
            />
          )}
        </div>
      </div>
      <hr className="bg-custom-gradient p-1 rounded-2xl" />
    </>
  );
};

export default HeaderWelcome;
