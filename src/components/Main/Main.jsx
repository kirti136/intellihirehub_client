import { useState, useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboard2Check } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/932755326/photo/modern-office-buildings-made-of-glass-and-concret.webp?b=1&s=612x612&w=0&k=20&c=evemY5FN1nbVC_-7IHYjH2eGy8L3BvZtftCUj3hdNHs=",
    companyName: "TechGlobe Solutions",
    location: "Metropolis City",
    rating: 4.5,
    revenue: 2500000,
    description:
      "TechGlobe Solutions is a leading tech firm specializing in innovative software solutions for various industries.",
    additionalDetail: "Provides AI-driven solutions.",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/503680362/photo/modern-office-architecture.jpg?s=612x612&w=0&k=20&c=oHGb0Hiv8dVqDfiTacymRFoy6kMhhZJu2YI3EzfWNq8=",
    companyName: "DataVision Insights",
    location: "Silicon Valley",
    rating: 4.7,
    revenue: 3200000,
    description:
      "DataVision Insights provides cutting-edge analytics and data visualization tools for businesses.",
    additionalDetail: "Offers real-time data analytics.",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2021/03/29/12/16/stairs-6133971_640.jpg",
    companyName: "InnoTech Innovations",
    location: "Tech Hub City",
    rating: 4.2,
    revenue: 1800000,
    description:
      "InnoTech Innovations specializes in groundbreaking technology solutions for the modern world.",
    additionalDetail: "Known for revolutionary IoT devices.",
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2020/02/27/14/33/building-4884852_640.jpg",
    companyName: "EcoSolutions Unlimited",
    location: "Eco-Friendly Haven",
    rating: 4.6,
    revenue: 2100000,
    description:
      "EcoSolutions Unlimited offers sustainable and eco-friendly solutions for a greener planet.",
    additionalDetail: "Provides solar-powered technology.",
  },
  {
    id: 5,
    image:
      "https://cdn.pixabay.com/photo/2020/01/29/20/24/building-4803602_640.jpg",
    companyName: "HealthTech Innovators",
    location: "Healthcare Hub",
    rating: 4.9,
    revenue: 2900000,
    description:
      "HealthTech Innovators pioneers advanced healthcare technology and medical breakthroughs.",
    additionalDetail: "Develops personalized healthcare solutions.",
  },
  {
    id: 6,
    image:
      "https://cdn.pixabay.com/photo/2013/03/20/17/00/office-95311_640.jpg",
    companyName: "ArtTech Studios",
    location: "Artistic Community",
    rating: 4.4,
    revenue: 1900000,
    description:
      "ArtTech Studios combines art and technology to create unique digital experiences.",
    additionalDetail: "Creates interactive digital art installations.",
  },
  {
    id: 7,
    image:
      "https://cdn.pixabay.com/photo/2014/11/13/23/34/transamerica-pyramid-530061_640.jpg",
    companyName: "SpaceTech Explorations",
    location: "Space Research Center",
    rating: 4.8,
    revenue: 2700000,
    description:
      "SpaceTech Explorations pioneers exploration and innovation in space technology.",
    additionalDetail: "Works on satellite communication systems.",
  },
  {
    id: 8,
    image:
      "https://media.istockphoto.com/id/1048358188/photo/modern-building-in-paris.jpg?s=612x612&w=0&k=20&c=xQKe6UpXIZhIHQJ-pwrOMm1KIQd74Xc6haT-UcVYEMc=",
    companyName: "Futurist Innovations",
    location: "Futuristic City",
    rating: 4.3,
    revenue: 2000000,
    description:
      "Futurist Innovations designs futuristic technology solutions for upcoming challenges.",
    additionalDetail: "Focuses on augmented reality applications.",
  },
  {
    id: 9,
    image:
      "https://media.istockphoto.com/id/1269677040/photo/modern-office-building-close-up-in-sunlight.jpg?s=612x612&w=0&k=20&c=417BUmeudFbM-CaXbDDCdwF-fyQxkmzF2fFwVybvZ4c=",
    companyName: "EnergyWave Solutions",
    location: "Renewable Energy Hub",
    rating: 4.5,
    revenue: 2400000,
    description:
      "EnergyWave Solutions develops innovative renewable energy solutions for a sustainable future.",
    additionalDetail: "Specializes in wind energy projects.",
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
    <section className="main container  content">
      <div className="secTitle">
        <h3 data-aos="fade-up" className="title">
          Valuable Companies
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
                <h4 className="destination">{data.companyName}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{data.location}</span>
                </span>

                <div className="priceBox flex">
                  <div className="rating">
                    <span>
                      <p>{data.additionalDetail}</p>
                      {/* <small>{data.rating}</small> */}
                    </span>
                  </div>
                  {/* <div className="price">
                    <h5>
                      <strong>$</strong>
                      {data.revenue}
                    </h5>
                  </div> */}
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
