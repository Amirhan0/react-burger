import React, { useEffect, useState } from "react";
import HeaderMain from "../components/HeaderMain";

const Orders = () => {
  const [ordersItems, setOrdersItems] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;

  useEffect(() => {
    const fetchOrdersItems = async () => {
      if (!userId) return;

      try {
        const response = await fetch(
          `http://localhost:3001/orders-items/${userId}`
        );
        if (!response.ok) {
          throw new Error("Ошибка при получении элементов заказа");
        }
        const data = await response.json();
        setOrdersItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrdersItems();
  }, [userId]);

  return (
    <div className="min-h-screen bg-[#22222A] text-white p-4">
      <HeaderMain />
      <h1 className="text-4xl font-bold mb-8">Мои заказы</h1>
      <div className="space-y-6">
        {ordersItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#333] p-6 rounded-lg shadow-lg flex flex-col space-y-4"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Заказ #{index + 1}</h2>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{`Продукт ID: ${item.productId}`}</h3>
                <p className="text-sm">{`Количество: ${item.quantity}`}</p>
              </div>
              <span className="text-xl font-bold">{`₸${item.price}`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
