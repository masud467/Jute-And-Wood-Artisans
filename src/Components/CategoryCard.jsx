import PropTypes from "prop-types";

const CategoryCard = ({ category }) => {
  const { image, item_name, subcategory_name, description } = category;
  return (
    <div>
      <div className="card h-[500px] bg-base-100 shadow-xl">
  <figure><img className="h-56 w-full" src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Subcategory Name: {subcategory_name}</h2>
    <p><span className="text-xl font-medium">Name:</span> {item_name}</p>
    <p><span className="text-xl font-medium">Description:</span> {description}</p>
    
  </div>
</div>
    </div>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  category: PropTypes.object,
};
