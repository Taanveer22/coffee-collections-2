import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const Card = ({ coffeeItem, handleRemoveFromFavourite }) => {
  const location = useLocation();
  const { pathname } = location;
  // console.log(location);
  // console.log(pathname);

  const { id, name, image, category, rating, popularity, description } =
    coffeeItem;

  return (
    <div className="card bg-gray-200 shadow-sm">
      <Link to={`/cardDetail/${id}`}>
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
            <div className="badge badge-outline">Popularity : {popularity}</div>
          </div>
        </div>
      </Link>

      {/* ====moved the delete btn outside the link to avoid routing==== */}
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemoveFromFavourite(id)}
          className="absolute -top-5 -right-5 bg-yellow-500 p-3 rounded-full cursor-pointer"
        >
          <FaTrashAlt size={20}></FaTrashAlt>
        </div>
      )}
    </div>
  );
};

export default Card;
