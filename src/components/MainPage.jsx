import HeaderWelcome from "./HeaderWelcome";
import Category from "./Category";
import Products from "./Products";
import HeaderMain from "./HeaderMain";
const MainPage = () => {
  return (
    <>
      <div className="bg-[#111015] min-h-screen pb-24">
        <HeaderWelcome></HeaderWelcome>
        <Category></Category>
        <Products></Products>
        <HeaderMain></HeaderMain>
      </div>
    </>
  );
};

export default MainPage;
