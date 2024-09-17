import Favorites from "./Favorites";
import HeaderWelcome from "./HeaderWelcome";
import Category from "./Category";
import Products from "./Products";
import HeaderMain from "./HeaderMain";
const MainPage = () => {
  return (
    <>
      <div className="bg-[#111015] h-full">
        <HeaderWelcome></HeaderWelcome>
        <Favorites></Favorites>
        <Category></Category>
        <Products></Products>
        <HeaderMain></HeaderMain>
      </div>
    </>
  );
};

export default MainPage;
