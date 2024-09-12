export default function Main() {
  return (
    <div className="bg-slate-900 h-screen flex flex-col">
      <div className="flex flex-row justify-between items-center p-4">
        <div className="flex flex-1">
          <p className="text-4xl text-white">Привет, Амир</p>
        </div>
        <div className="flex items-center space-x-4">
          <img src="/search.svg" alt="Search" className="w-6 h-6" />
          <div className="text-white">фотка</div>
        </div>
      </div>
      <hr className="bg-[#E1D24A] h-2 rounded-lg w-full" />
      <div className="flex flex-col flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl text-white font-bold">Ваши любимые товары</p>
          <p className="text-[#EDB216]">Посмотреть все</p>
        </div>
        <div className="flex overflow-x-auto space-x-4 mb-4">
          <div className="bg-[#22222A] p-4 rounded-lg flex items-center min-w-[300px] relative">
            <img
              src="/burger1.svg"
              alt="Чикен Бургер"
              className="w-32 object-contain h-32 mr-4"
            />
            <div className="flex flex-col flex-1">
              <h2 className="text-lg text-white font-bold mb-2">
                Чикен Бургер
              </h2>
              <p className="text-white mb-2">
                Котлета куриная, свежие овощи, сыр чеддер, соус для бургера
              </p>
              <div className="flex items-center mb-2">
                <span className="text-[#EDB216] font-bold text-2xl">
                  ₸16000
                </span>
              </div>
              <span className="text-white">2900g</span>
            </div>
            <img
              src="/hearth.svg"
              alt="Heart"
              className="absolute top-2 right-2 w-6 h-6"
            />
            <img
              src="/bag.svg"
              alt="Bag"
              className="absolute bottom-2 right-2 w-6 h-6"
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl text-white font-bold">Все товары</p>
            <p className="text-[#EDB216]">Посмотреть все</p>
          </div>
          <div className="flex overflow-x-auto space-x-2">
            <button className="flex items-center justify-start w-28 h-16 bg-[#333] rounded p-2">
              <img src="/burger.svg" alt="Бургеры" className="w-8 h-8 mr-2" />
              <span className="text-white">Бургеры</span>
            </button>
            <button className="flex items-center justify-start w-28 h-16 bg-[#333] rounded p-2">
              <img src="/snake.svg" alt="Снэки" className="w-8 h-8 mr-2" />
              <span className="text-white">Снэки</span>
            </button>
            <button className="flex items-center justify-start w-28 h-16 bg-[#333] rounded p-2">
              <img src="/franch.svg" alt="Фрэнч Дог" className="w-8 h-8 mr-2" />
              <span className="text-white">Фрэнч Дог</span>
            </button>
            <button className="flex items-center justify-start w-28 h-16 bg-[#333] rounded p-2">
              <img src="/cookie.svg" alt="Пицца" className="w-8 h-8 mr-2" />
              <span className="text-white">Пицца</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">{/* Добавьте сюда дополнительный блок */}</div>
    </div>
  );
}
