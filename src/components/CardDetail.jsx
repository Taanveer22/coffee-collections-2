import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToFavourite, getFromFavourite } from "../utilities";

const CardDetail = () => {
  const { cardId } = useParams();
  const parsedId = parseInt(cardId);
  // console.log(cardId);
  // console.log(parsedId);

  const coffeesLoaderData = useLoaderData();
  // console.log(coffeesLoaderData);

  const [coffee, setCoffe] = useState({});
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const findedCard = coffeesLoaderData.find(
      (coffeeItem) => coffeeItem.id === parsedId
    );
    setCoffe(findedCard);
    const favouriteList = getFromFavourite();
    const isExist = favouriteList.find((item) => item.id === findedCard.id);
    if (isExist) {
      setIsFavourite(true);
    }
  }, [coffeesLoaderData, parsedId]);

  const { id, name, image, description, category } = coffee;
  // console.log(coffee);

  const handleAddToFavourite = (coffee) => {
    addToFavourite(coffee);
    setIsFavourite(true);
    // ==========only use for debug=========
    // getFromFavourite(coffee);
  };
  return (
    <>
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-center mb-3">
          Card Detail Id : {id}
        </h1>
        <div className="hero bg-green-200 min-h-screen">
          <div className="hero-content flex-row">
            <img src={image} className="max-w-lg rounded-lg shadow-2xl" />
            <div>
              <div className="flex gap-3">
                <h1 className="text-5xl font-bold">{name}</h1>
                <button className="badge badge-info">{category}</button>
              </div>
              <p className="py-6">{description}</p>
              <button
                disabled={isFavourite}
                onClick={() => handleAddToFavourite(coffee)}
                className="btn btn-error"
              >
                Add To Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
