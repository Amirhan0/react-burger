import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function FullName() {
  const navigate = useNavigate();
  const [nameUser, setNameUser] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  function navigation(link) {
    navigate(link);
  }

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) {
      setId(storedId);
    } else {
      console.log("ID не найден");
    }
  });

  function handleNameChange(event) {
    setNameUser(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.value);
  }

  const submitHandle = async () => {
    if (!id) {
      console.error("ID пользователя не установлен.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3001/update-profile",
        {
          id: id,
          nameUser,
          image,
        }
      );
      console.log("Данные профиля обновлены", response.data);
      navigation("/success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-[#111015] w-screen h-screen text-white px-6 py-14 flex flex-col justify-between">
        <div className="flex flex-col gap-12">
          <div>
            <div className="bg-custom-gradient w-10 h-10 rounded-xl flex justify-center items-center">
              <img src="/Back.svg" alt="" onClick={() => navigation("/")} />
            </div>
          </div>
          <div className="gap-5 flex flex-col">
            <h2 className="text-3xl font-bold">
              Введите свои инициалы, <br /> чтобы продолжить
            </h2>
            <p className="text-[#6C7072] text-lg">
              ФИО будет использоваться в вашем профиле
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="bg-[#22222A]  py-4 w-full rounded-xl flex px-3 gap-4 items-center">
              <input
                type="text"
                className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
                placeholder="Введите имя"
                value={nameUser}
                onChange={handleNameChange}
              />
            </div>
            <div className="bg-[#22222A]  py-4 w-full rounded-xl flex px-3 gap-4 items-center">
              <input
                type="text"
                className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
                placeholder="Введите URL аватарки"
                value={image}
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>

        <div>
          <button
            className="bg-custom-gradient w-full p-3 text-black font-bold rounded-full outline-none text-xl"
            onClick={submitHandle}
          >
            Далее
          </button>
        </div>
      </div>
    </>
  );
}
