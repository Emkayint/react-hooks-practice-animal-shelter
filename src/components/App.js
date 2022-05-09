import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const [paths, setPaths] = useState('pets')
  useEffect(()=> {
    fetch(`http://localhost:3001/${paths}`)
    .then(res => res.json())
    .then(res => setPets( res) )
  }, [])

  function filterFecth(data){
    setFilters({type : data})
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters filterFecth = { filterFecth }/>
          </div>
          <div className="twelve wide column">
            <PetBrowser petsFromDb={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
