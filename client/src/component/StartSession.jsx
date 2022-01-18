import axios from "axios";
import React, {useState} from "react";
const BASE_URL = 'http://localhost:3001/api'

export default function StartSession(props) {
  const [tagInput, setTagInput] = useState(false)
  const handleSession = () => {
    props.setSession(false);
    props.setStart(true);
    if(tagInput===true){
      postNewTag();
    } else {
      return
    }
  };
  const postNewTag = async ()=>{
    await axios.post(`${BASE_URL}/tag/new`, props.newTag)
    console.log(props.newTag)
  }
  const tagDropdownHandler = (e) => {
    if (e.target.value=="newTag") {
      console.log('newtag')
      setTagInput(true)
    } else {
      console.log('dropdownOptions')
      setTagInput(false)
      props.setSessionObject({...props.sessionObject,"tagId": e.target.value})
    }
  }
  return (
    <div>
      <button onClick={handleSession}>Start Session</button>
      <form>
        <select onChange={tagDropdownHandler
          // (e)=>{
          // props.setSessionTag(e.target.value)
          // props.setSessionObject({...props.sessionObject,"tagId": e.target.value})}
        // } 
          }>
          {props.optionArray.map((e, i) => (
            <option key={i} value={e.id}>{e.description}</option>
          ))}
          <option value="null"></option>
          <option value="newTag">Create new tag...</option>
        </select>
      </form>
      <form>
        {tagInput ? 
        <input name="description" onChange={props.tagChange} placeholder="Enter new tag"></input> 
        :
        <div></div>
        }
        
        <input name="timeSpent" onChange={props.handleChange} placeholder="Enter session time in minutes"></input>
      </form>
    </div>
  );
}
