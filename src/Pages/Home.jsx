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
        <h1 className="text-center text-3xl font-bold">
          Our Popular Items:{items.length}{" "}
        </h1>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item) => (
            <ItemCard key={item._id} item={item}></ItemCard>
          ))}
        </div>
      </div>
      <div>Art & Craft Categories Section for challenging part</div>
      <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Frequently Asked Questions(FAQ)
            </h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  1.What products does the website offer?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    The website offers a variety of products including wooden
                    furniture, wall hangings, kitchen utensils, storage baskets,
                    and jewelry crafted from jute and wood.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  2.Are the products handmade?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Yes, many of the products featured on the website are
                    handmade, crafted with care to ensure quality and attention
                    to detail.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  3.Are the materials sustainable?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p>
                    Yes, the website emphasizes the use of sustainable materials
                    such as jute and wood, reflecting a commitment to
                    eco-friendly practices.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  4.Do the products come in different sizes and styles?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p>
                    Yes, the products come in various sizes and styles to suit
                    different preferences and needs. Whether you are looking for
                    small decorative items or larger furniture pieces, there is
                    something for everyone.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  5.Is shipping available internationally?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p>
                    Shipping options may vary, but the website typically offers
                    international shipping to customers around the world.
                    Shipping costs and delivery times may vary depending on the
                    destination.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  6.Are there any care instructions for the products?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p>
                    Yes, the website provides care instructions for each product
                    to help customers maintain their quality and appearance over
                    time. Instructions may include tips for cleaning, storage,
                    and maintenance.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <h1 className="text-3xl font-bold text-center">Review</h1>
        <div className="flex flex-col max-w-xl mx-auto p-8 shadow-sm rounded-xl lg:p-12 bg-gray-200 dark:text-gray-800">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">
              Your opinion matters!
            </h2>
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-center">How was your experience?</span>
              <div className="flex space-x-3">
                <button
                  type="button"
                  title="Rate 1 stars"
                  aria-label="Rate 1 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 2 stars"
                  aria-label="Rate 2 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 3 stars"
                  aria-label="Rate 3 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 4 stars"
                  aria-label="Rate 4 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 5 stars"
                  aria-label="Rate 5 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-gray-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <textarea
                rows="3"
                placeholder="Message..."
                className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"
              ></textarea>
              <button
                type="button"
                className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600"
              >
                Leave feedback
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm dark:text-gray-600"
            >
              Maybe later
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
