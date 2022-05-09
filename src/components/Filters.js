import React, { useState } from "react";

function Filters({ filterFecth }) {
  const [myFilter, setMyFilter] = useState('all')


  return (
    <div className="ui form" onChange={e => setMyFilter(e.target.value)}>
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type">
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={() => filterFecth(myFilter)}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
