import { Link } from "react-router-dom";

const Categories = ({ categoriesLoaderData }) => {
  return (
    <div role="tablist" className="tabs tabs-border mb-4">
      {categoriesLoaderData.map((categoryType) => (
        <Link
          to={`/cardsCategory/${categoryType.category}`}
          key={categoryType.id}
          role="tab"
          className="tab"
        >
          {categoryType.category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
