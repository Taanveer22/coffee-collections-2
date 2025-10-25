import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const Coffees = () => {
  const coffeesLoaderData = useLoaderData();
  // console.log(coffeesLoaderData);
  const [coffees, setCoffees] = useState(coffeesLoaderData);
  const handleSort = (type) => {
    // console.log(type);
    if (type === "popularity") {
      const sorted = [...coffeesLoaderData].sort(
        (a, b) => a.popularity - b.popularity
      );
      setCoffees(sorted);
    } else if (type === "rating") {
      const sorted = [...coffeesLoaderData].sort((x, y) => y.rating - x.rating);
      setCoffees(sorted);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-medium">
          Sort Coffee's by Popularity & Rating
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-primary"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-secondary"
          >
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {coffees.map((coffeeItem) => (
          <Card key={coffeeItem.id} coffeeItem={coffeeItem}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffees;
