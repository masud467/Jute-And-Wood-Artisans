import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const MyCart = () => {
    const {user} = useContext(AuthContext)
  const [items,setItems] = useState([])
  const [displayItem,setDisplayItem] = useState([])

  const handleItemFilter = filter=>{
    if(filter==='all'){
        setDisplayItem(items)
    }
    else if(filter==='yes'){
        const customization = items.filter(item=> item.customization==="yes")
        setDisplayItem(customization)
    }
    else if(filter==='no'){
        const noCustomization = items.filter(item=> item.customization==='no')
       setDisplayItem(noCustomization)
    }
  }
  
   useEffect(()=>{
    fetch(`https://jute-and-wood-artisans-for-server.vercel.app/myProduct/${user?.email}`)
   .then(res=>res.json())
   .then(data =>{
    console.log(data)
   setItems(data)
   setDisplayItem(data)
   })
   },[user])

   
const handleDelete =(id) =>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://jute-and-wood-artisans-for-server.vercel.app/item/${id}`,{
                    method:"DELETE"
                })
                .then(res =>res.json())
                .then(data =>{
                    console.log(data)
                    if(data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                          });
                          const remaining = items.filter(item=>item._id!==id)
                          setItems(remaining)
                    }
                })
             
            
            }
          });
    }
    return (
        <div>
             <div className="text-center mt-10">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white">
            Sort by{" "}
            <span>
              <img src="/image/sort.png" alt="" />
            </span>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleItemFilter("all")}>
              <a>All</a>
            </li >
            <li onClick={() => handleItemFilter("yes")}>
              <a>Customization</a>
            </li>
            <li onClick={() => handleItemFilter("no")}>
              <a>No Customization</a>
            </li>
          </ul>
        </details>
      </div>
            <div className="grid md:grid-cols-2 gap-6">
            
            {
                displayItem.map(item=> <div key={item._id}>
                   <div className="card card-side bg-base-100 shadow-xl p-4 ">
        <figure>
          <img className="md:w-96 h-56" src={item.image} alt="" />
        </figure>
        <div className="flex justify-between  w-full mx-4">
          <div className="">
            <h2 className="card-title">Name: {item.item_name}</h2>
            
            <p className=" font-medium">Price: {item.price}</p>
            <p className=" font-medium">Rating: {item.rating}</p>
            <p className=" font-medium">Stock Status: {item.stockStatus}</p>
            <p className=" font-medium">Customization: {item.customization}</p>
           <div className="flex justify-around mt-5">
           <Link to={`/update/${item._id}`}><button className=" btn btn-primary rounded-md">Update</button></Link>
            <button onClick={()=>handleDelete(item._id)} className=" btn btn-primary rounded-md">Delete</button>
           </div>
          </div>
          
        </div>
      </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default MyCart;