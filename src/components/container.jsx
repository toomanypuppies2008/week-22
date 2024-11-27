import React from "react";
import Card from "./card";

function Container(props) {
  return (
    <div className="container">
      {props.characters.map(character => <Card name={character.name} gender = {character.gender}
      imgLink = {character.image}
      url = {character.url} />)}
    </div>
  )
}
export default Container;