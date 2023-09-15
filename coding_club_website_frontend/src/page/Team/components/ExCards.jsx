import React from "react";
import "../styles/Card.css";
import SingleCard from "./SingleCard";

const detail = [
  {
    name: "RAKESH KUMAR",
    post: "President\nrakeshlohana@gmail.com",
    imageURL: "images/Directorate/p1.jpeg",
  },
  {
    name: "ALI AHSAN SAMNANI",
    post: "MEMBER\nAliAhsansamnanani@gmail.com",
    imageURL:"images/Directorate/p2.jpeg"
  },
  {
    name: "BASIT ALI",
    post: "MEMBER\nbasitalikhan2619@gmail.com",
    imageURL:"images/Directorate/p3.jpeg",
  },
  {
    name: "ALI NADEEM",
    post: "MEMBER\nnadeemkhan1232@gmail.com",
    imageURL:"images/Directorate/p4.jpeg",
  }
];

const ExCards = () => {
  return (
    <>
      <div className="cards-main">
        {detail.map((i) => {
          return <SingleCard key={i.name} name={i.name} post={i.post} imageURL={i.imageURL}/>;
        })}
      </div>
    </>
  );
};

export default ExCards;
