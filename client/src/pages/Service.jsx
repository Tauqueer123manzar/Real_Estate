import React from 'react';
import estate from '../assets/Estate.jpg';
import Footer from '../components/Footer';
import { Typewriter } from 'react-simple-typewriter';

const Service = () => {
  const services = [
    {
      id: 1,
      title: 'Luxury Apartments',
      image: "https://content.domu.com/styles/global_webp/s3/2024-06/the_row_fulton_market_apartments_10.jpg.webp",
      description: 'Explore our luxurious apartments with modern amenities and stunning views.',
    },
    {
      id: 2,
      title: 'Family Homes',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxLqOFdEAnYydimkxvJoyxF_SAeSwFAsB0Q&s",
      description: 'Find perfect homes for families with spacious interiors and serene neighborhoods.',
    },
    {
      id: 3,
      title: 'Office Spaces',
      image: "https://www.winnershtriangle.co.uk/wp-content/uploads/2023/06/WT-banner.jpg",
      description: 'Premium office spaces to elevate your business in prime locations.',
    },
    {
      id: 4,
      title: 'Retail Spaces',
      image: "https://www.nashvillesmls.com/uploads/agent-1/creative-ways-to-fill-vacant-retail-spaces-nashville.jpg",
      description: 'Leverage our retail spaces for your business in bustling commercial areas.',
    },
    {
      id: 5,
      title: 'Vacation Homes',
      image: "https://media.architecturaldigest.com/photos/576d98445ea3e586576ec49a/16:9/w_2580,c_limit/luxury-vacation-rental-sites-03.jpg",
      description: 'Escape to beautiful vacation homes for a relaxing getaway.',
    },
    {
      id: 6,
      title: 'Industrial Properties',
      image: 'https://www.co-production.net/images/2024/04/25/Manufacturers-Guide-Industrial-Real-Estate-Mexico.jpg',
      description: 'Ideal industrial properties with easy access to transportation hubs.',
    },
    {
      id: 7,
      title: 'Rentals Properties',
      image: 'https://images1.apartments.com/i2/EfZC3WmfXDxnRDjijIRkg5NilwV2c_LfUmdtxx8Pz7Y/117/benson-lofts---live-the-lifestyle-you-have-sioux-city-ia-interior-photo.jpg',
      description: 'Rentals for your next vacation or business trip.',
    },
    {
      id: 8,
      title: 'Agricultural Properties',
      image: 'https://plotson.com/wp-content/uploads/2018/06/WhatsApp-Image-2018-06-01-at-3.25.53-PM.jpeg',
      description: 'Agricultural properties for your farming and agribusiness needs.',
    },
  ];

  return (
    <>
    <div className="w-full min-h-screen px-4 md:px-10 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            <Typewriter
              words={[
                'Find Your Dream Home, Where Life Begins!',
                'Your Perfect Property Awaits!',
                'Explore, Experience, Elevate Your Lifestyle!',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Explore a curated selection of properties tailored to fit every lifestyle and budget.
            Our expert team is dedicated to guiding you every step of the way, ensuring a seamless journey to homeownership.
          </p>
          <p className="text-gray-600">
            Explore properties that not only meet your needs but also elevate your lifestyle.
            From stunning views to modern amenities, we connect you with homes that inspire and invigorate.
          </p>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg font-semibold transition duration-300">
            Explore Now
          </button>
        </div>
        <div>
          <img src={estate} alt="property" className="rounded-lg shadow-md w-full object-cover h-96" />
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-3xl font-semibold font-serif">Our Real Estate Services</h2>
        <p className="text-gray-500 mt-2">
          Explore the services we offer to make your property journey smooth and successful.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};

export default Service;
