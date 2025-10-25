import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getFromFavourite, removeFromFavourite } from "../utilities";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favouriteList = getFromFavourite();
    // console.log(favouriteList);
    setCoffees(favouriteList);
  }, []);

  const handleRemoveFromFavourite = (id) => {
    removeFromFavourite(id);
    const favouriteList = getFromFavourite();
    setCoffees(favouriteList);
  };
  return (
    <>
      <div className="mb-12">
        <Heading
          title="Welcome to Dashboard"
          subTitle="Manage coffees that you have previously added as favorite. You can view or remove them from here."
        ></Heading>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {coffees.map((coffeeItem) => (
            <Card
              key={coffeeItem.id}
              coffeeItem={coffeeItem}
              handleRemoveFromFavourite={handleRemoveFromFavourite}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
