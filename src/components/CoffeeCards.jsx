import { useParams } from "react-router-dom";

const CoffeeCards = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="mb-12">
      <h1>coffee cards... {params.categoryName}</h1>
    </div>
  );
};

export default CoffeeCards;
