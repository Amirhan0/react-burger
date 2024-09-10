import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  function navigation(value) {
    navigate(value);
  }
  return (
    <>
      <div className="flex flex-col bg-[url('/bg.JPG')] h-screen">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col items-center">
            <span className="text-white text-5xl pt-60">Burger Bar</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col mb-9">
              <p className="text-white text-2xl text-center p-3">
                Вкусный бургер — это то, что вы заслуживаете здесь и сейчас
              </p>
            </div>
            <div className="flex flex-col m-4 gap-3">
              <button
                className="w-80 bg-yellow-300 rounded-lg p-4 text-black text-xl font-bold"
                onClick={() => navigation("/authorization")}
              >
                Войти
              </button>
              <button
                className="w-80 bg-white text-yellow-500 rounded-lg p-4 text-xl"
                onClick={() => navigation("/registration")}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
