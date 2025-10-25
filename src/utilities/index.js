import toast from "react-hot-toast";

// get favourite from local storage
const getFromFavourite = () => {
  const allFavouriteList = localStorage.getItem("favouriteList");
  if (allFavouriteList) {
    const favouriteList = JSON.parse(allFavouriteList);
    // console.log(favouriteList);
    return favouriteList;
  } else {
    // console.log([]);
    return [];
  }
};

// add favourite to local storage
const addToFavourite = (coffee) => {
  // console.log(coffee);
  const favouriteList = getFromFavourite();
  console.log(favouriteList);
  const isExist = favouriteList.find((item) => item.id === coffee.id);
  if (isExist) {
    return toast.error("already exist");
  } else {
    favouriteList.push(coffee);
    localStorage.setItem("favouriteList", JSON.stringify(favouriteList));
    return toast.success("successfully added");
  }
};
// remove favourite from local storage
const removeFromFavourite = (id) => {
  const favouriteList = getFromFavourite();
  const remainingFavouriteList = favouriteList.filter((item) => item.id !== id);
  localStorage.setItem("favouriteList", JSON.stringify(remainingFavouriteList));
  toast.success("successfully removed");
};

export { addToFavourite, getFromFavourite, removeFromFavourite };
