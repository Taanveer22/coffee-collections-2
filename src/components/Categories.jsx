import { Link } from "react-router-dom";

const Categories = ({ categoriesLoaderData }) => {
  return (
    <div className="flex justify-center items-center mb-6">
      <div role="tablist" className="tabs tabs-border">
        {categoriesLoaderData.map((categoryType) => (
          <Link
            to={`/cardsCategory/${categoryType.category}`}
            key={categoryType.id}
            role="tab"
            className="tab text-xl font-medium"
          >
            {categoryType.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
