import React, { useState } from "react";
import Title from "./Title";
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCocktail />,
    title: "Free Cocktails",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora esse ab totam dolorum. Voluptatem labore, numquam architecto beatae doloremque fugiat.",
  },
  {
    id: 2,
    icon: <FaHiking />,
    title: "Limitless Hiking",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora esse ab totam dolorum. Voluptatem labore, numquam architecto beatae doloremque fugiat.",
  },
  {
    id: 3,
    icon: <FaShuttleVan />,
    title: "Free Shuttle",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora esse ab totam dolorum. Voluptatem labore, numquam architecto beatae doloremque fugiat.",
  },
  {
    id: 4,
    icon: <FaBeer />,
    title: "Strongest Beer",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora esse ab totam dolorum. Voluptatem labore, numquam architecto beatae doloremque fugiat.",
  },
];

const Services = () => {
  const [service] = useState(services);

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {service.map((item) => {
          return (
            <article key={item.id} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
