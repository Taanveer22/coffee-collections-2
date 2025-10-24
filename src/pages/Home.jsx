import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
  const categoriesLoaderData = useLoaderData();
  // console.log(categoriesLoaderData);
  return (
    <div>
      <Banner></Banner>
      <Heading
        title="Browse Coffees by Category"
        subTitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      ></Heading>
      <Categories categoriesLoaderData={categoriesLoaderData}></Categories>
      {/* dynamic nested component for categories */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
