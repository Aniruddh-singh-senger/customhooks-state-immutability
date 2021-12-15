import { useState } from "react";

const initialState = {
  fname: "adam",
  lname: "maxy"
};

const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState);

  const objectClickhandler = () => {
    // person.fname = "adam1";
    // person.lname = "maxy1";
    // setPerson(person);

    const newPerson = { ...person };
    newPerson.fname = "Tornas";
    newPerson.lname = "T";
    setPerson(newPerson);
  };
  console.log(person);
  console.log("Object use State rendring...");
  return (
    <div className="matter" >
      <h1 >Object based state Immutability</h1>
      <h2 >{person.fname} {person.lname}</h2>
      <h3>if you directly update object as state with the use of useState or useReducer so object dont update</h3>
      <button style={{background:'red', color:'white'}} onClick={objectClickhandler}>click</button>
      
    </div>
  );
};
export default ObjectUseState;
