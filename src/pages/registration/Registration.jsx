export function Registration() {
  return (
    <>
      <div className="flex flex-col bg-[url('/bg.JPG')] h-screen">
        <div className="flex flex-col h-full">
          <div className="flex items-center">
            <span className="text-white text-5xl">BURGER BAR</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-2xl font-bold">
              Создать Аккаунт
            </span>
            <p className="text-white text-xl opacity-15">
              Зарегистрируйтесь, чтобы продолжить
            </p>
            <div className="flex flex-col gap-2">
              <input className="p-2" type="email" placeholder="Введите почту" />
              <input
                className="p-2"
                type="number"
                placeholder="Введите номер"
              />
              <input
                className="p-2"
                type="password"
                placeholder="Введите пароль"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 m-4">
          <button className="w-80 bg-yellow-300 rounded-lg p-4 text-black font-bold">
            Создать аккаунт
          </button>
          <p className="text-2xl text-white">
            Уже есть аккаунт?{" "}
            <span className="text-yellow-300 font-bold">Войти</span>
          </p>
        </div>
      </div>
    </>
  );
}
