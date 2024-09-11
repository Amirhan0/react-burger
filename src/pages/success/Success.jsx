import { useNavigate } from "react-router-dom";

export default function Success() {
    const navigate = useNavigate()
    function navigation(link) {
        navigate(link)
    }
    return (
      <>
        <div className="bg-[#111015] w-screen h-screen text-white px-6 py-14 flex flex-col justify-between ">
          <div className="flex flex-col gap-4 items-center h-4/5 justify-center">
            <img src="/CircleWavyCheck.svg" alt="" className="w-[200px] "/>
            <div className="flex flex-col items-center gap-4 ">
              <h2 className=" text-[#B28C2E] text-5xl font-bold">Поздравляем!</h2>
              <p className="text-xl font-bold">Ваш профиль готов к использованию</p>
            </div>
          </div>
          <div>
            <button className="bg-custom-gradient p-3 w-full text-black font-bold rounded-full outline-none text-xl">
              Далее
            </button>
          </div>
        </div>
      </>
    );
  }