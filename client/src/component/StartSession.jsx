import axios from "axios";
import React from "react";
const BASE_URL = 'http://localhost:3001/api'
export default function StartSession(props) {
  const handleSession = () => {
    props.setSession(false);
    props.setStart(true);
    postNewTag();
  };
  const postNewTag = async ()=>{
    await axios.post(`${BASE_URL}/tag/new`, props.newTag)
    console.log(props.newTag)
  }
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
        <input name="description" onChange={props.tagChange} placeholder="Enter new tag"></input>
        <input name="timeSpent" onChange={props.handleChange} placeholder="Enter session time in minutes"></input>
      </form>
    </div>
  );
}
