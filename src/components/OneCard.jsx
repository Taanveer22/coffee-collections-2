const OneCard = ({ coffeeItem }) => {
  const { name, image, category, rating, popularity, description } = coffeeItem;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={image} className="w-full h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{rating}</div>
            <div className="badge badge-outline">{popularity}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCard;
