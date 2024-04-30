import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


const AddItems = () => {
    const {user} = useContext(AuthContext)
    
   
    const handleAddItem = e =>{
        e.preventDefault()
        const from = e.target 
        const image = from.image.value;
        const item_name = from.item_name.value;
        const subcategory_name = from.subcategory_name.value;
        const description = from.description.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const customization = from.customization.value;
        const processing_time = from.processing_time.value;
        const stockStatus = from.stockStatus.value;
        const email = user.email;
        const name= user.displayName;
        from.reset()
        
       

        const newItem = {image,item_name,subcategory_name,description,price,rating,customization,processing_time,stockStatus,email,name}
        console.log(newItem)

        fetch('https://jute-and-wood-artisans-for-server.vercel.app/item',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newItem)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "item added successfully!",
                    icon: "success"
                  });
            }
        })
    }
    return (
        <div className="p-24 bg-[rgb(244,243,240)]">
        <h1 className="text-3xl font-bold text-center">Add new Item</h1>
      <form onSubmit={handleAddItem}>
        {/* form image & item name row */}
        <div className="flex gap-4 ">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Item name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="item_name"
                placeholder="item name"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
        </div>
        {/* form subcategory name & short description row */}
        <div className="flex gap-4 ">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subcategory_name"
                placeholder="subcategory name"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short Description"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
        </div>
        {/* form Price & Rating row */}
        <div className="flex gap-4 ">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="price"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="rating"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
        </div>
        {/* form customization & processing_time row */}
        <div className="flex gap-4 ">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="customization"
                placeholder="customization(yes,no)"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="processing_time"
                placeholder="processing_time"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
        </div>
        {/* form stockStatus */}
        <div className="flex gap-4 ">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="stockStatus"
                placeholder="stock status(In stock, Made to Order)"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
          
        </div>
       
        <input type="submit" value="Add Item" className="btn btn-block bg-[#D2B48C]" />
      </form>
    </div>
    );
};

export default AddItems;