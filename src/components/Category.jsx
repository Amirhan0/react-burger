const Category = () => {
  return (
    <div className="p-4">
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
  );
}

export default Category