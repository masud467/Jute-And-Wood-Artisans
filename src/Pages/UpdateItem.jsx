import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateItem = () => {
    const items = useLoaderData()
    const {_id,image,
        item_name,
        subcategory_name,
        description,
        price,
        rating,
        customization,
        processing_time,
        stockStatus} = items

        const handleUpdateItem = e =>{
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
            

            
        const newItem = {image,item_name,subcategory_name,description,price,rating,customization,processing_time,stockStatus}
        console.log(newItem)
        fetch(`https://jute-and-wood-artisans-for-server.vercel.app/item/${_id}`,{
            method:"PUT",
            headers:{
                "content-type": "application/json",
            },
            body:JSON.stringify(newItem)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'product update successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="p-24 bg-[rgb(244,243,240)]">
        <h1 className="text-3xl font-bold text-center">Update Item</h1>
      <form onSubmit={handleUpdateItem}>
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
                defaultValue={image}
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
                defaultValue={item_name}
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
                defaultValue={subcategory_name}
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
                defaultValue={description}
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
                defaultValue={price}
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
                defaultValue={rating}
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
                defaultValue={customization}
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
                defaultValue={processing_time}
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
                defaultValue={stockStatus}
                placeholder="stock status(In stock, Made to Order)"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
          
        </div>
       
        <input type="submit" value="Update Item" className="btn btn-block bg-[#D2B48C]" />
      </form>
    </div>
    );
};

export default UpdateItem;