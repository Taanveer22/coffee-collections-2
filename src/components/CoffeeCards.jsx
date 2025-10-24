import { useLoaderData, useParams } from "react-router-dom";
import OneCard from "./OneCard";

const CoffeeCards = () => {
  const params = useParams();
  // console.log(params);
  const coffeesLoaderData = useLoaderData();
  console.log(coffeesLoaderData);
  return (
    <div className="mb-12">
      <h1>coffee cards... {params.categoryName}</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {coffeesLoaderData.map((coffeeItem) => (
          <OneCard coffeeItem={coffeeItem} key={coffeeItem.id}></OneCard>
        ))}
      </div>
    </div>
  );
};

export default CoffeeCards;
