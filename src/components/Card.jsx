import { Link } from "react-router-dom";
const Card = ({ coffeeItem }) => {
  const { id, name, image, category, rating, popularity, description } =
    coffeeItem;
  return (
    <>
      <Link to={`/cardDetail/${id}`}>
        <div className="card bg-gray-200 shadow-sm">
          <figure>
            <img src={image} className="w-full h-60" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-info">{category}</div>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rating : {rating}</div>
              <div className="badge badge-outline">
                Popularity : {popularity}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
