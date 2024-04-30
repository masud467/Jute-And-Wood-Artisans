import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const ItemCard = ({item}) => {
    const {_id,image,item_name,subcategory_name,price,rating,stockStatus} = item
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-4 ">
        <figure>
          <img className="md:w-96 h-56" src={image} alt="" />
        </figure>
        <div className="flex justify-between  w-full mx-4">
          <div className="">
            <h2 className="card-title">{subcategory_name}</h2>
            <p className=" font-medium">Name:{item_name}</p>
            <p className=" font-medium">Price: {price}</p>
            <p className=" font-medium">Rating: {rating}</p>
            <p className=" font-medium">{stockStatus}</p>
            <Link to={`/item/${_id}`}><button className="btn  btn-primary rounded-md">Show Details</button></Link>
          </div>
          
        </div>
      </div>
        </div>
    );
};

export default ItemCard;

ItemCard.propTypes ={
item:PropTypes.object
}