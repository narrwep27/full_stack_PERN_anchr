import React from "react";

export default function StartSession(props) {
  const handleSession = () => {
    props.setSession(false);
    props.setStart(true)
  };

  return (
    <div>
      <button onClick={handleSession}>Start Session</button>
      <form>
        <select onChange={(e)=>{
          props.setSessionTag(e.target.value)
          props.setSessionObject({...props.sessionObject,"tagId": e.target.value})
        } 
          }>
          {props.optionArray.map((e, i) => (
            <option key={i}>{e.description}</option>
          ))}
        </select>
      </form>
      <form>
        <input placeholder="Enter new tag"></input>
        <input onChange={props.handleChange} placeholder="Enter session time"></input>
      </form>
    </div>
  );
}
