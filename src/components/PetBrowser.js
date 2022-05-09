import React, {useState, useEffect} from "react";

import Pet from "./Pet";


function PetBrowser() {
  const [petsFromDb, setPetsFromDb] = useState([])
  useEffect(()=> {
    fetch(`http://localhost:3001/pets`)
    .then(res => res.json())
    .then(res => setPetsFromDb( res) )
  }, [])

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
