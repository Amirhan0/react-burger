import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Authorization() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  const submitHandle = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        passwordUser: password,
      });
      const { user } = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      setErrorMessage("");
      navigate("/home");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Неправильный email или пароль");
      } else {
        setErrorMessage("Ошибка сервера. Попробуйте позже.");
      }
      console.error("Ошибка при авторизации:", error);
    }
  };

  function navigation(link) {
    navigate("/");
  }
  return (
    <div className="relative flex flex-col bg-[url('/bg.JPG')] w-screen h-screen justify-center items-center text-white  px-6 py-14">
      <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
      <div className="flex flex-col justify-evenly items-center h-screen">
        <div className="relative flex flex-col justify-center items-center ">
          <h1
            className="font-ar-cena text-4xl font-bold cursor-pointer"
            onClick={() => navigation("/")}
          >
            BURGER BAR
          </h1>
        </div>
        <div className=" relative flex flex-col">
          <div className=" relative flex flex-col items-center  justify-center pb-10">
            <h2 className="font-bold text-2xl">Войдите в свой профиль</h2>
            <p className="text-[#6C7072] text-sm">Войдите, чтобы продолжить</p>
          </div>

          <div className="gap-3 flex flex-col ">
            <div className="bg-[#22222A]  py-4 w-full rounded-xl flex px-3 gap-4 items-center">
              <img src="/PaperPlane.svg" alt="" />
              <input
                type="text"
                placeholder="Введите почту"
                value={email}
                onChange={handleEmail}
                className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
              />
            </div>
            <div className="bg-[#22222A]  py-4 w-full rounded-xl flex px-3 gap-4 items-center">
              <img src="/Shield.svg" alt="" />
              <input
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={handlePassword}
                className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
              />
              <img src="/eye-off.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 relative">
          <button className="bg-transparent  text-[#B28C2E] font-bold rounded-full outline-none text-md">
            Забыли пароль?
          </button>

          <button
            className="bg-custom-gradient w-80 p-3 text-black font-bold rounded-full outline-none text-xl"
            onClick={submitHandle}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}
