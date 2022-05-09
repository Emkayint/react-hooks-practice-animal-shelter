import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  let [pets, setPets] = useState([]);
  let [filters, setFilters] = useState({ type: "all" });
  let [paths, setPaths] = useState('pets')
  console.log(filters)
  useEffect(()=> {
    fetch(`http://localhost:3001/${paths}`)
    .then(res => res.json())
    .then(res => setPets( res) )
  }, [paths])

 

  function filterFecth(data){
    setFilters({type : data})
    if( data === 'all'){
      setPaths(() => paths = 'pets')
    } else {
      setPaths(() => paths =`pets?type=${filters.type}`)
    }
    console.log(`myPath ${paths}`)
  }
  console.log(`my filter ${filters.type}`)
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
