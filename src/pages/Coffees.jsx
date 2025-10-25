import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffees = () => {
  const coffeesLoaderData = useLoaderData();
  console.log(coffeesLoaderData);
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12">
      {coffeesLoaderData.map((coffeeItem) => (
        <Card key={coffeeItem.id} coffeeItem={coffeeItem}></Card>
      ))}
    </div>
  );
};

export default Coffees;
