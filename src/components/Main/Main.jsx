import React, { useState, useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboard2Check } from "react-icons/bs";
import StarRating from "../StarRating/StarRating";
import AOS from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=300",
    destination: "Beach Paradise",
    location: "Tropical Island",
    rating: 4.5,
    price: 1000,
    description:
      "Experience the ultimate beach getaway on a tropical island. Crystal-clear waters, white sandy beaches, and relaxation await you in this paradise.",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/3889764/pexels-photo-3889764.jpeg?auto=compress&cs=tinysrgb&w=300",
    destination: "Mountain Retreat",
    location: "Alpine Wonderland",
    rating: 4.7,
    price: 1200,
    description:
      "Escape to the serene mountains for a rejuvenating retreat. Hiking, fresh air, and breathtaking views make this the perfect getaway.",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=300",
    destination: "City Exploration",
    location: "Metropolis City",
    rating: 4.2,
    price: 800,
    description:
      "Discover the vibrant city life with endless entertainment options. Explore museums, dine at top restaurants, and immerse yourself in culture.",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/2374652/pexels-photo-2374652.jpeg?auto=compress&cs=tinysrgb&w=300",
    destination: "Historical Adventure",
    location: "Ancient Ruins",
    rating: 4.6,
    price: 1100,
    description:
      "Step back in time and explore ancient ruins. Uncover the mysteries of the past and relive history in this captivating adventure.",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/1817050/pexels-photo-1817050.jpeg?auto=compress&cs=tinysrgb&w=300",
    destination: "Wildlife Safari",
    location: "African Savannah",
    rating: 4.9,
    price: 1500,
    description:
      "Embark on a thrilling safari in the African savannah. Witness majestic wildlife, from lions to elephants, in their natural habitat.",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/1591362/pexels-photo-1591362.jpeg?auto=compress&cs=tinysrgb&w=300",
    destination: "Cultural Immersion",
    location: "Historic Village",
    rating: 4.4,
    price: 950,
    description:
      "Immerse yourself in the rich cultural heritage of a historic village. Participate in local traditions, taste authentic cuisine, and learn the history.",
  },
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=300",
    destination: "Island Paradise",
    location: "Exotic Archipelago",
    rating: 4.8,
    price: 1400,
    description:
      "Escape to an exotic archipelago for an unforgettable island paradise experience. Pristine beaches, water sports, and relaxation await.",
  },
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/723465/pexels-photo-723465.jpeg?auto=compress&cs=tinysrgb&w=300",
    destination: "Winter Wonderland",
    location: "Snowy Mountains",
    rating: 4.3,
    price: 900,
    description:
      "Embrace the beauty of winter in the snowy mountains. Ski down the slopes, build snowmen, and warm up by the fire in cozy cabins.",
  },
  {
    id: 9,
    image:
      "https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=300",
    destination: "Desert Adventure",
    location: "Sahara Desert",
    rating: 4.5,
    price: 1050,
    description:
      "Experience the thrill of the Sahara Desert. Go on camel treks, camp under the stars, and witness the stunning landscapes of the desert.",
  },
];

function Main() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      AOS.init({ duration: 2000 });
      setIsMounted(true);
    }
  }, [isMounted]);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" className="title">
          Most Visited Destination
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map((data) => {
          return (
            // Individual Cards
            <div data-aos="fade-up" key={data.id} className="singleDestination">
              {/* Image */}
              <div className="imageDiv">
                <img src={data.image} alt={data.destination} />
              </div>
              {/* Card Info */}
              <div className="cardInfo">
                <h4 className="destination">{data.destination}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{data.location}</span>
                </span>

                <div className="priceBox flex">
                  <div className="rating">
                    <span>
                      <StarRating totalStars={5} initialRating={data.rating} />
                      <small>{data.rating}</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>
                      <strong>$</strong>
                      {data.price}
                    </h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{data.description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <BsClipboard2Check className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Main;
