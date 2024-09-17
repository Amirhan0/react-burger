import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()

  function navigation(link) {
    navigate(link)
  }
    return (
      <div className="relative flex flex-col bg-[url('/bg.JPG')] w-screen h-screen justify-center items-center text-white font-bold py-7">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="relative flex flex-col justify-center h-1/2">
          <h1 className="font-ar-cena text-4xl">BURGER BAR</h1>
        </div>
        
        <div className="relative flex flex-col gap-9 justify-end h-1/2">
          <p className="text-2xl">Вкусный бургер — это то,<br />что вы заслуживаете <br />здесь и сейчас</p>
          <div className="flex flex-col gap-4">
            <button className="bg-custom-gradient text-black font-bold rounded-full p-3 outline-none text-xl" onClick={() => navigation('/authorization')}>Войти</button>
            <button className="text-[#B28C2E] bg-white font-bold rounded-full p-3 outline-none text-xl"  onClick={() => navigation('/registration')}>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    );
  }