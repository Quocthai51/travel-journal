import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  return (
    <div className="Card">
      <div className="Card--Image">
        <img src={props.img} />
      </div>
      <div className="Card--Details">
        <div className="Card--Details--Location">
          <FontAwesomeIcon className="locationIcon red" icon={faLocationPin} />
          <p>{props.location}</p>
          <p className="linkMap">View on Google Maps</p>
        </div>
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
        <p>{props.desc}</p>
      
      </div>
      
    </div>
    
  );
}

export default Card;
