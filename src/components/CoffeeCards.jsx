import { useLoaderData, useParams } from "react-router-dom";
import OneCard from "./OneCard";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const params = useParams();
  // console.log(params);
  const coffeesLoaderData = useLoaderData();
  // console.log(coffeesLoaderData);
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const filteredByCategory = coffeesLoaderData.filter(
      (coffeeElement) => coffeeElement.category === params.categoryName
    );
    setCoffees(filteredByCategory);
  }, [coffeesLoaderData, params]);
  return (
    <div className="mb-12">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {coffees.map((coffeeItem) => (
          <OneCard coffeeItem={coffeeItem} key={coffeeItem.id}></OneCard>
        ))}
      </div>
    </div>
  );
};

export default CoffeeCards;
