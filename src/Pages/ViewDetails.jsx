import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import useItemData from "../Components/Hokes/useItemData";
// import DetailsCard from "../Components/DetailsCard";

const ViewDetails = () => {
    const [singleData, setSingleData] = useState({});
    const { id } = useParams();
    // const idInt = parseInt(id)
    // eslint-disable-next-line no-unused-vars
    const { data} = useItemData();
    // const idInt = parseInt(id)
    console.log(id, singleData);
  
    useEffect(() => {
      if (data) {
        const singleData = data.find((item) => item._id == id);
        console.log(singleData);
        setSingleData(singleData);
      }
    }, [data, id]);
  
  const {
  
    image,
    item_name,
    subcategory_name,
    description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
  } = singleData || {};

  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="font-bold text-2xl">{subcategory_name}</h2>
          <p className="font-semibold text-xl">Name : {item_name}</p>
          <p className="font-semibold">{description}</p>
          <div className="text-xl font-semibold space-y-2">
            <p >Price: {price}</p>
            <p>Stock Status: {stockStatus}</p>
            <p>Customization: {customization}</p>
            <p>Processing Time: {processing_time}</p>
            <p>Rating: {rating}</p>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default ViewDetails;
