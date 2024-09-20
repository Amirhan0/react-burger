import React from "react";
import HeaderMain from "../components/HeaderMain";

const Orders = () => {
  return (
    <div className="min-h-screen bg-[#22222A] text-white p-4">
      <HeaderMain />
      <h1 className="text-4xl font-bold mb-8">Мои заказы</h1>
      <div className="space-y-6">
        <div className="bg-[#333] p-6 rounded-lg shadow-lg flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Заказ №1</h2>
            <span className="text-lg font-medium">18 сентября 2023</span>
          </div>
          <div className="flex space-x-4 items-center">
            <img
              src="/burger1.jpg"
              alt="Чизбургер"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Чизбургер</h3>
              <p className="text-sm">Количество: 2</p>
            </div>
            <span className="text-xl font-bold">₸800</span>
          </div>
          <div className="flex space-x-4 items-center">
            <img
              src="/fries.jpg"
              alt="Картошка фри"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Картошка фри</h3>
              <p className="text-sm">Количество: 1</p>
            </div>
            <span className="text-xl font-bold">₸300</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-bold">Итого: ₸1900</span>
            <span className="font-extrabold">Статус: доставлен</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
