import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const MyCart = () => {
    const {user} = useContext(AuthContext)
  const [items,setItems] = useState([])
  
   useEffect(()=>{
    fetch(`http://localhost:6001/myProduct/${user?.email}`)
   .then(res=>res.json())
   .then(data =>{
    console.log(data)
   setItems(data)
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
                fetch(`http://localhost:6001/item/${id}`,{
                    method:"DELETE"
                })
                .then(res =>res.json())
                .then(data =>{
                    console.log(data)
                    if(data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
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
        <div className="grid md:grid-cols-2 gap-6">
            
            {
                items.map(item=> <div key={item._id}>
                   <div className="card card-side bg-base-100 shadow-xl p-4 ">
        <figure>
          <img className="w-96 h-56" src={item.image} alt="" />
        </figure>
        <div className="flex justify-between  w-full mx-4">
          <div className="">
            <h2 className="card-title">Name: {item.item_name}</h2>
            
            <p className=" font-medium">Price: {item.price}</p>
            <p className=" font-medium">Rating: {item.rating}</p>
            <p className=" font-medium">Stock Status: {item.stockStatus}</p>
            <p className=" font-medium">Customization: {item.customization}</p>
           <div className="flex justify-around mt-5">
           <Link to=''><button className=" btn btn-primary rounded-md">Update</button></Link>
            <Link to=''><button onClick={()=>handleDelete(item._id)} className=" btn btn-primary rounded-md">Delete</button></Link>
           </div>
          </div>
          
        </div>
      </div>
                </div>)
            }
        </div>
    );
};

export default MyCart;