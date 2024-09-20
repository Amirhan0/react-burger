import React, { useState } from "react";
import HeaderMain from "../components/HeaderMain";
const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className="min-h-screen bg-[#22222A] text-white p-4">
      <HeaderMain />
      <h1 className="text-4xl font-bold mb-8">Оформление заказа</h1>

      <div className="bg-[#333] p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Контактные данные</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Ваш email"
              className="w-full p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Ваш телефон"
              className="w-full p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Секция доставки */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Доставка</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Адрес доставки"
              className="w-full p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Город"
              className="w-full p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Почтовый индекс"
              className="w-full p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Секция оплаты */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Оплата</h2>

          <div className="space-y-4">
            {/* Выбор метода оплаты */}
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                  className="mr-2"
                />
                <span>Наличными</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  className="mr-2"
                />
                <span>Картой</span>
              </label>
            </div>
            {paymentMethod === "card" && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Номер карты"
                  className="w-full p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="ММ/ГГ"
                    className="w-1/2 p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">Итого: ₸3200</span>
          <button className="bg-custom-gradient text-black px-8 py-4 rounded-lg font-bold hover:bg-[#dba10b] transition duration-300">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
