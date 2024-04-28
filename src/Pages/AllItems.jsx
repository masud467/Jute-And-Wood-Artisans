import { Link, useLoaderData } from "react-router-dom";

const AllItems = () => {
  const allItems = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">all items: {allItems.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr >
              <th></th>
              <th className="text-xl font-semibold">Name</th>
              <th className="text-xl font-semibold">SubCategory Name</th>
              <th className="text-xl font-semibold">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allItems.map((item,index) => (
              <tr key={item._id}>
                <th>{index+1}</th>
                <td>{item.item_name}</td>
                <td>{item.subcategory_name}</td>
                <td>{item.price}</td>
                <td>
                   <Link to={`/item/${item._id}`}> <button className="btn ">Show Details</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItems;
