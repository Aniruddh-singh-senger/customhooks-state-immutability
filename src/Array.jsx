import { useState } from "react";

const initialValue = ["adam", "maxy"];

const ArrayUseState = () => {
  const [person, setPerson] = useState(initialValue);

  const ClickHandler = () => {
    // person.push("james");
    // person.push("kotlin");
    // setPerson(person);

    const newPerson = [...person];
    newPerson.push("james");
    newPerson.push("Kotlin");
    setPerson(newPerson);
  };
  console.log("Array use state rendering...");
  return (
    <div className="matter">
      <h1>Array based state Immutability</h1>
      <p>Mutating an object or an array as state will not cause a re-render when used with the useState or useReducer hook</p>
      <button style={{ background:'red',color:'white'}} onClick={ClickHandler}>click</button>
      {person.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default ArrayUseState;
