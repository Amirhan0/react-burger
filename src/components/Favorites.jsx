const FavoritesProduct = () => {
  const FavoriteList = [
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
  ];
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-white font-bold text-xl">Ваши любимые товары</h1>
        <h2 className="text-[#EDB216]">Посмотреть все</h2>
      </div>

      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {FavoriteList.map((favorite) => (
            <div
              key={favorite.id}
              className="bg-[#22222A] p-4 rounded-lg shadow-lg flex-shrink-0 w-80 relative"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <img
                    src={favorite.image}
                    alt="Бургер с беконом"
                    className="w-32 h-32 rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center text-white ml-4 flex-grow">
                  <h1 className="text-xl font-bold mb-2">{favorite.title}</h1>
                  <p className="text-[#6A6A6E] mb-2">{favorite.description}</p>
                  <span className="text-xl font-semibold">
                    {favorite.price}
                  </span>
                  <span className="text-l text-[#6A6A6E] font-semibold">
                    {favorite.weight}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <img src="/hearth.svg" className="w-8 h-8" alt="Heart" />
                <img src="/bag.svg" className="w-8 h-8" alt="Bag" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesProduct;
