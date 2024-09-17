// FavoritesProduct.jsx
import React from "react";

const Products = () => {
  const ProductsList = [
    {
      id: 1,
      image: "/burger1.svg",
      title: "Чикен бургер",
      description:
        "Котлета куриная, свежие овощи, сыр чеддер, соус для бургера",
      price: "₸16000",
      weight: "2900g",
    },
    {
      id: 2,
      image: "/burger2.svg",
      title: "Чикен бургер",
      description:
        "Котлета куриная, свежие овощи, сыр чеддер, соус для бургера",
      price: "₸16000",
      weight: "2900g",
    },
    {
      id: 3,
      image: "/burger2.svg",
      title: "Чикен бургер",
      description:
        "Котлета куриная, свежие овощи, сыр чеддер, соус для бургера",
      price: "₸16000",
      weight: "2900g",
    },
    {
      id: 4,
      image: "/burger2.svg",
      title: "Чикен бургер",
      description:
        "Котлета куриная, свежие овощи, сыр чеддер, соус для бургера",
      price: "₸16000",
      weight: "2900g",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {ProductsList.map((product) => (
          <div
            key={product.id}
            className="bg-[#22222A] p-4 rounded-lg shadow-lg flex flex-col relative"
          >
            <div className="flex-grow">
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-cover rounded-lg"
              />
              <div className="text-white mt-2 flex flex-col flex-grow">
                <h1 className="text-xl font-bold mb-2">{product.title}</h1>
                <p className="text-[#6A6A6E] mb-2 text-sm">
                  {product.description}
                </p>
                <div className="flex justify-between items-center ">
                  <span className="text-xl font-semibold">{product.price}</span>
                  <span className="text-sm text-[#6A6A6E] font-semibold">
                    {product.weight}
                  </span>
                  <div className="bg-custom-gradient rounded-full">
                    <img src="/plus.svg" alt="" className="w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
