import { NavLink } from "react-router-dom";

const Categories = ({ categoriesLoaderData }) => {
  return (
    <>
      <div className="flex justify-center items-center mb-6">
        <div role="tablist" className="tabs tabs-border">
          {categoriesLoaderData.map((categoryType) => (
            <NavLink
              to={`/cardsCategory/${categoryType.category}`}
              key={categoryType.id}
              role="tab"
              className={({ isActive }) =>
                isActive
                  ? "tab tab-active text-xl font-medium"
                  : "tab text-xl font-medium"
              }
            >
              {categoryType.category}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
