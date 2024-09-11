import { useNavigate } from "react-router-dom";

export default function Authorization() {
  const navigate = useNavigate();

  function navigation(link) {
    navigate(link);
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
          {/* inputs */}
          <div className="gap-3 flex flex-col ">
            {/* инпут 1 */}
            <div className="bg-[#22222A]  py-4 w-full rounded-xl flex px-3 gap-4 items-center">
              <img src="/paperPlane.svg" alt="" />
              <input
                type="text"
                placeholder="Введите почту"
                className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
              />
            </div>

            {/* инпут 2 */}
            <div className="bg-[#22222A]  py-4 w-full rounded-xl flex px-3 gap-4 items-center">
              <img src="/Shield.svg" alt="" />
              <input
                type="text"
                placeholder="Введите пароль"
                className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
              />
              <img src="/eye-off.svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col mt-5">
            {/* <ul className="list-disc pl-5 text-sm text-[#1EC625]">
            <li>Пароль содержит более 3 символов</li>
            <li>Введены специальные символы</li>
          </ul> */}
          </div>
        </div>
        <div className="flex flex-col gap-4 relative">
          <button className="bg-transparent  text-[#B28C2E] font-bold rounded-full outline-none text-md">
            Забыли пароль?
          </button>

          <button className="bg-custom-gradient w-80 p-3 text-black font-bold rounded-full outline-none text-xl">
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}
