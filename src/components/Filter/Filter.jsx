import React from "react";

const Filter = ({value, onChange}) => {
  return (
    <label style={{
      display: "flex",
      flexDirection: "column",
      gap: "4px"}}>Find Contacts by name
    <input 
      type="text" 
      name="filter"
      value={value}
      onChange={onChange}/>
    </label>
  )
}

export default Filter;