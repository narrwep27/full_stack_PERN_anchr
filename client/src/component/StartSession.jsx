import axios from "axios";
import React, {useState} from "react";
const BASE_URL = 'http://localhost:3001/api'

export default function StartSession(props) {
  const [tagInput, setTagInput] = useState(true)
  const handleSession = () => {
    props.setSession(false);
    props.setStart(true);
    // if(tagInput===true){
    //   //when handleSession is invoked, post value of tag Input field only if tagInput is set to 'true'
    //   postNewTag();
    //   //then refresh tag list 
    //   props.getTags()
    //   //then set tag value of sessionObject to current Tag
    //   props.setSessionObject({...props.sessionObject,"tagId": document.getElementById('tagDropDown').value})
    //   console.log(props.sessionObject)
    // } else {
    //   //otherwise, return out
    //   return
    // }
  };
  const postNewTag = async (e)=>{
    e.preventDefault()
    await axios.post(`${BASE_URL}/tag/new`, props.newTag)
    // props.setUserTags()
    props.getTags()
    console.log(props.newTag)
    
  }
  const tagDropdownHandler = (e) => {
    if (e.target.value=="newTag") {
      console.log('newtag')
      //when "Create new tag..." is chosen from dropdown, setTagInput to 'true' to render input field
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
        <select id="tagDropDown" onChange={tagDropdownHandler}>
          {props.userTags.map((e, i) => (
            <option key={i} value={e.id}>{e.description}</option>
          ))}
          <option value="newTag">Add new tag...</option>
        </select>
      </form>
      
        {tagInput ? 
        <form onSubmit={postNewTag}>
          <input  name="description" onChange={props.tagChange} placeholder="Enter tag name..."></input> 
          <button type="submit">Add</button>
        </form>
        :
        <form>
          <input name="timeSpent" onChange={props.handleChange} placeholder="Enter session time in minutes"></input>
        </form>
        }
      
      
    </div>
  );
}
