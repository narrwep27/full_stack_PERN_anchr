import React, {useState} from "react";
import { AddTag } from "../services/Tag";

export default function StartSession(props) {
  const [tagInput, setTagInput] = useState(true)
  const [selectorValue, setSelectorValue]=useState(null)
  const handleSession = (e) => {
    e.preventDefault()
    props.setSession(false);
    props.setStart(true);
  };
  const postNewTag = async (e)=>{
    e.preventDefault()
    await AddTag(props.newTag)
    props.getTags()
    setSelectorValue(null)
    
  }
  const tagDropdownHandler = (e) => {
    if (e.target.id=="newTag") {
      setTagInput(true)
    } else {
      setTagInput(false)
      props.setSessionObject({...props.sessionObject,"tagId": e.target.value})
    }
  }
  return (
    <div>
      
      <form onSubmit={handleSession}>
        
        <select form="timerform" id="tagDropDown" onChange={tagDropdownHandler} value={selectorValue} required>
          <option value="" id="newTag">Add new tag...</option>
          {props.userTags.map((e, i) => (
            <option key={i} value={e.id}>{e.description}</option>
          ))}
          
        </select>
      </form>
      {tagInput ? 
        <form onSubmit={postNewTag}>
          <button type="submit">Add</button>
          <input  value={selectorValue} name="description" onChange={props.tagChange} placeholder="Enter tag name..."></input> 
        </form>
        :
        <div></div>
        }
      {tagInput ? 
        <div></div>
        :
        <form onSubmit={handleSession} id="timerform">
          <button  type="submit">Start Session</button>
          <input type="number" name="timeSpent" onChange={props.handleChange} placeholder="Enter session time in minutes"></input>
        </form>}
    </div>
  );
}
