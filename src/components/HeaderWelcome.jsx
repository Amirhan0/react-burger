const HeaderWelcome = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center p-4">
        <div className="flex flex-1 items-center">
          <p className="text-4xl text-white font-bold">Привет, Амир</p>
        </div>
        <div className="flex items-center space-x-4">
          <img src="/search.svg" alt="Search" className="w-6 h-6" />
          <div className="text-white">фотка</div>
        </div>
      </div>
      <hr className="bg-custom-gradient p-1 rounded-2xl"/>
    </>
  );
};

export default HeaderWelcome;
