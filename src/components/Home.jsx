import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              Welcome to <span className="text-yellow-400">Tourista</span>
            </h1>
            <p className="text-lg mb-8">
              Your one-stop destination for booking flights, hotels, and more.
              Explore the world with us!
            </p>
            <Link
              to="/flights"
              className="inline-block bg-yellow-400 text-black py-3 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12">
            Explore Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Flight Card */}
            <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Flights</h3>
              <p className="text-lg mb-6">
                Book flights to your favorite destinations worldwide.
              </p>
              <Link
                to="/flights"
                className="inline-block bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300"
              >
                Search Flights
              </Link>
            </div>

            {/* Hotels Card */}
            <div className="bg-green-600 text-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Hotels</h3>
              <p className="text-lg mb-6">
                Find the best hotels at unbeatable prices. Stay in comfort.
              </p>
              <Link
                to="/hotels"
                className="inline-block bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300"
              >
                Explore Hotels
              </Link>
            </div>

            {/* About Us Card */}
            <div className="bg-purple-600 text-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              <p className="text-lg mb-6">
                Learn more about our journey and how we’re transforming travel.
              </p>
              <Link
                to="/about"
                className="inline-block bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 ">
        <div className="max-w-screen-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="flex justify-center space-x-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-lg mb-4">
                "Tourista made our trip planning so much easier! The flight and
                hotel booking was smooth and seamless. Highly recommended!"
              </p>
              <div className="font-semibold">John Doe</div>
              <div className="text-sm text-gray-500">Traveler</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-lg mb-4">
                "Great customer support and easy to use platform. Booked my
                flight and hotel in just minutes!"
              </p>
              <div className="font-semibold">Jane Smith</div>
              <div className="text-sm text-gray-500">Frequent Flyer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Ready to Explore the World?
        </h2>
        <p className="text-lg mb-6">
          Join thousands of travelers booking their next adventure with
          Tourista!
        </p>
        <Link
          to="/flightSearch"
          className="inline-block bg-yellow-400 text-black py-3 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Start Your Journey
        </Link>
      </section>
    </div>
  );
};

export default Home;
