import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderMain from "../components/HeaderMain";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [totalAmount, setTotalAmount] = useState(0);
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [phoneUser, setPhoneUser] = useState("");
  const [addressUser, setAddressUser] = useState("");
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const amount = localStorage.getItem("totalAmount");
    const selectedProducts = JSON.parse(
      localStorage.getItem("selectedProducts")
    );
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (amount) {
      setTotalAmount(JSON.parse(amount));
    }

    if (selectedProducts) {
      setProducts(selectedProducts);
    }

    if (storedUser) {
      setUser(storedUser);
      setNameUser(storedUser.nameUser || "");
      setEmailUser(storedUser.email || "");
      setPhoneUser(storedUser.phone || "");
    }
  }, []);

  const handleOrder = async () => {
    const orderData = {
      userId: user.id,
      totalPrice: totalAmount,
      paymentMethod,
      address: addressUser,
      nameUser,
    };

    try {
      const orderResponse = await axios.post(
        "http://localhost:3001/orders",
        orderData
      );
      const orderId = orderResponse.data.orderId;

      const orderItemsData = products.map((product) => ({
        userId: user.id,
        productId: product.id,
        price: product.price,
        quantity: product.quantity || 1,
      }));

      console.log("Данные для отправки в orders-items:", {
        orderId,
        orderItemsData,
      });

      await axios.post("http://localhost:3001/orders-items", {
        orderId,
        items: orderItemsData,
      });

      alert("Заказ успешно оформлен!");
      navigate("/orders");
    } catch (error) {
      console.error("Ошибка при оформлении заказа:", error);
      alert("Произошла ошибка при оформлении заказа.");
    }
  };

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
              value={nameUser}
              onChange={(e) => setNameUser(e.target.value)}
              placeholder="Ваше имя"
              className="w-full p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
            />
            <input
              type="email"
              value={emailUser}
              onChange={(e) => setEmailUser(e.target.value)}
              placeholder="Ваш email"
              className="w-full p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
            />
            <input
              type="tel"
              value={phoneUser}
              onChange={(e) => setPhoneUser(e.target.value)}
              placeholder="Ваш телефон"
              className="w-full p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Доставка</h2>
          <div className="space-y-4">
            <input
              type="text"
              value={addressUser}
              onChange={(e) => setAddressUser(e.target.value)}
              placeholder="Адрес доставки"
              className="w-full p-3 rounded-lg bg-[#444] placeholder-gray-400 text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Оплата</h2>
          <div className="space-y-4">
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
          <span className="text-2xl font-bold">
            Итого: ₸{totalAmount ? `${totalAmount}` : "Загрузка"}
          </span>
          <button
            onClick={handleOrder}
            className="bg-custom-gradient text-black px-8 py-4 rounded-lg font-bold hover:bg-[#dba10b] transition duration-300"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
