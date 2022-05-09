import React, {useState, useEffect} from "react";

import Pet from "./Pet";


function PetBrowser({ petsFromDb }) {
  

  const petsToDisplay = petsFromDb.map(pet => (
    <Pet 
      key = {pet.id}
      name = {pet.name}
      gender = {pet.gender}
      type = {pet.type}
      description = {pet.description}
      isAdopted = {pet.isAdopted}
      weight = {pet.weight}
      age = {pet.age}
    />
  ))
  

  return <div className="ui cards">
    {petsToDisplay}
  </div>;
}

export default PetBrowser;
