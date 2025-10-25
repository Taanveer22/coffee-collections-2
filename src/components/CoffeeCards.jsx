import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const params = useParams();
  // console.log(params);
  const coffeesLoaderData = useLoaderData();
  // console.log(coffeesLoaderData);
  const [coffees, setCoffees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (params.categoryName) {
      const filteredByCategory = [...coffeesLoaderData].filter(
        (coffeeElement) => coffeeElement.category === params.categoryName
      );
      setCoffees(filteredByCategory);
    } else {
      setCoffees(coffeesLoaderData.slice(0, 6));
    }
  }, [coffeesLoaderData, params]);

  return (
    <>
      <div className="mb-12">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {coffees.map((coffeeItem) => (
            <Card coffeeItem={coffeeItem} key={coffeeItem.id}></Card>
          ))}
        </div>
        <div className="flex gap-6 items-center">
          <button
            onClick={() => navigate("/coffees")}
            className="btn btn-warning"
          >
            View In New Page
          </button>
          <button
            onClick={() => setCoffees(coffeesLoaderData)}
            className="btn btn-success"
          >
            View More Cards
          </button>
        </div>
      </div>
    </>
  );
};

export default CoffeeCards;
