import React, {useState} from "react";

function Pet({name, gender, type, description, isAdopted, weight, age }) {
  const [checkAdopted, setcheckAdopted] = useState(isAdopted)

  function handleAdopted(){
    setcheckAdopted(true)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "male" ? '♀' :  '♂'}
          {name.toUpperCase()}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {checkAdopted ?  <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={ handleAdopted }>Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;
