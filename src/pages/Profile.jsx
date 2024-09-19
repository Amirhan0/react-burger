import { useNavigate } from "react-router-dom";
import HeaderMain from "../components/HeaderMain";
import { useEffect, useState } from "react";
const Profile = () => {
  const ProfileList = [
    {
      id: 1,
      icon: "/User.svg",
      title: "Общее",
      description: "Изменяйте вашу личную информацию",
    },
    {
      id: 2,
      icon: "/Heart.svg",
      title: "Уведомления",
      description: "Будьте в курсе всех событий",
    },
    {
      id: 3,
      icon: "/Heart.svg",
      title: "О нас",
      description: "Будьте в курсе всех событий",
    },
    {
      id: 4,
      icon: "/shieeld.svg",
      title: "Безопасность",
      description: "Ваши данные никто не украдет",
    },
  ];
  const navigate = useNavigate();

  function navigation(link) {
    navigate(link);
  }
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    }
  }, []);

  return (
    <>
      <div className="bg-[#18171C] h-screen">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div className="bg-custom-gradient w-10 h-10 rounded-xl flex justify-center items-center">
              <img src="/Back.svg" alt="" onClick={() => navigation("/home")} />
            </div>
            <h1 className="font-bold text-3xl text-white">Профиль</h1>
          </div>

          <div className="bg-[#22222A] mt-10 rounded-xl">
            <div className="p-6 flex items-center justify-between">
              <div>
                {user && (
                  <img
                    src={user.image}
                    alt={user.nameUser}
                    className="w-10 h-10 rounded-full"
                  />
                )}
              </div>
              <div>
                <h1 className="text-xl text-white font-bold">
                  {user ? `${user.nameUser}` : "Пользователь..."}
                </h1>
                <span className="text-xs text-[#6A6A6E]">
                  {user ? `${user.email}` : "Email..."}
                </span>
              </div>
              <img src="/Pencil.svg" className="w-8 h-8" alt="" />
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-white text-2xl font-bold">Общее</h1>
          </div>

          <div className="bg-[#22222A] mt-3 rounded-xl">
            {ProfileList.map((profile) => (
              <div
                className="p-4 flex justify-between items-center gap-3"
                key={profile.id}
              >
                <img src={profile.icon} className="w-10 h-10" />
                <div className="flex flex-col justify-center flex-1">
                  <span className="text-white font-bold text-lg">
                    {profile.title}
                  </span>
                  <p className="text-[#6A6A6E] text-sm">
                    {profile.description}
                  </p>
                </div>
                <img
                  src="/CaretLeft.svg"
                  className="w-6 h-6"
                  alt="Caret Icon"
                />
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h1 className="text-white text-2xl font-bold">Больше</h1>
          </div>
          <div className="bg-[#22222A] mt-3 rounded-xl">
            <div className="p-4 flex justify-between items-center gap-3">
              <img src="/SignOut.svg" className="w-10 h-10" />
              <div className="flex flex-col justify-center flex-1">
                <span className="text-white font-bold text-lg">Выйти</span>
                <p className="text-[#6A6A6E] text-sm">Но лучше не выходите</p>
              </div>
              <img src="/CaretLeft.svg" className="w-6 h-6" alt="Caret Icon" />
            </div>
          </div>

          <HeaderMain />
        </div>
      </div>
    </>
  );
};

export default Profile;
