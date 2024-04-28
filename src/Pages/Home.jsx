import { useLoaderData } from "react-router-dom";
import ItemCard from "../Components/ItemCard";

const Home = () => {
    const items = useLoaderData();
  return (
    <div>
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/qFv1qCH/room-interior-design.jpg"
              className="w-full rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/Dtqfckc/handcrafted-wooden-decorative-vase.jpg"
              className="w-full rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/s6zQxsD/interior-decoration-inspired-by-mexican-folklore.jpg"
              className="w-full rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/3svQNdp/view-indoor-space-ready-comfortable-activities-1.jpg"
              className="w-full rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold">Our Popular Items:{items.length} </h1>
        <div className="grid md:grid-cols-2 gap-5">
            {
                items.map(item=><ItemCard key={item._id} item={item}></ItemCard>)
            }
        </div>
      </div>
      <div>Art & Craft Categories Section for challenging part</div>
      <div>
        <h1>2 Extra Sections</h1>
      </div>
    </div>
  );
};

export default Home;
