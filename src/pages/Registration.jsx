import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function navigation(link) {
    navigate(link);
  }

  const validate = () => {
    const errors = {};

    if (!email) {
      errors.email = "Введите почту ";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Неккоректный адрес почты";
    }

    if (!phone) {
      errors.phone = "Введите пароль";
    } else if (!/^\d{11}$/.test(phone)) {
      errors.phone = "Неккоректный формат номера";
    }

    if (!password) {
      errors.password = "Введите пароль";
    } else if (password.length < 6) {
      errors.password = "Пароль должен содержать не менее 6 символов";
    }

    return errors;
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/register", {
        email,
        phoneNumber: phone,
        passwordUser: password,
      });
      console.log("Пользователь зарегистрирован", response.data);
      if (response.data && response.data.id) {
        localStorage.setItem("userId", response.data.id);
        console.log("ID сохранен в localStorage:", response.data.id);
      } else {
        console.log("ID не найден в ответе сервера");
      }

      navigation("/fullname");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex flex-col bg-[url('/bg.JPG')] w-screen h-screen justify-center items-center text-white px-6 py-14">
      <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
      <div className="flex flex-col justify-evenly items-center h-screen">
        <div className="relative flex flex-col justify-center items-center">
          <h1 className="font-ar-cena text-4xl font-bold" onClick={() => navigation('/')}>BURGER BAR</h1>
        </div>
        <div className="relative flex flex-col">
          <div className="relative flex flex-col items-center justify-center pb-10">
            <h2 className="font-bold text-2xl">Создать аккаунт</h2>
            <p className="text-[#6C7072] text-sm">
              Зарегистрируйтесь, чтобы продолжить
            </p>
          </div>
          <form className="gap-3 flex flex-col" onSubmit={submitHandle}>
            <div className="bg-[#22222A] py-4 w-full rounded-xl flex px-3 gap-4 items-center">
              <img src="/PaperPlane.svg" alt="" />
              <input
                type="text"
                placeholder="Введите почту"
                className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <div className="bg-[#22222A] py-4 w-full rounded-xl flex px-3 gap-4 items-center">
              <img src="/Phone.svg" alt="" />
              <input
                type="text"
                placeholder="Введите номер"
                className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
            <div className="bg-[#22222A] py-4 w-full rounded-xl flex px-3 gap-4 items-center">
              <img src="/Shield.svg" alt="" />
              <input
                type="password"
                placeholder="Введите пароль"
                className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src="/eye-off.svg" alt="" />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <button
              className="bg-custom-gradient w-full p-3 text-black font-bold rounded-full outline-none text-xl mt-4"
              type="submit"
            >
              Создать аккаунт
            </button>
          </form>
          <button
            className="bg-transparent text-white font-bold rounded-full outline-none text-xl mt-4"
            onClick={() => navigation("/authorization")}
          >
            Уже есть аккаунт? <span className="text-[#B28C2E]">Войти</span>
          </button>
        </div>
      </div>
    </div>
  );
}
