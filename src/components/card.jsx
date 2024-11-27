import React from "react";


function Card(props) {
   return(
   <div className="card">
    <h2>имя: <br/> {props.name}</h2>
    <p>пол: {props.gender}</p>
    <img className="img" src={props.imgLink} alt={props.name} ></img>
     <a href={props.url} target="_blank">Find out more!</a>
  </div>
    )
}

export default Card;
