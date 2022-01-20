import React, {useState} from 'react';
import { AddTag } from '../services/Tag';
import TagButton from './TagButton';

export default function StartSession(props) {
  const [tagInput, setTagInput] = useState(false);
  const handleSession = (e) => {
    e.preventDefault();
    if ((props.sessionObject.tagId!=='') && (props.sessionObject.timeSpent!==0)){
      props.setSession(false);
      props.setStart(true);
    }
  
  };
  const postNewTag = async (e) => {
    e.preventDefault()
    await AddTag(props.newTag)
    props.getTags()
    setTagInput(false)
    // setSelectorValue(null)
    
  }
  const tagDropdownHandler = (e) => {
    if (e.target.id=="newTag") {
      setTagInput(true)
    } else {
      setTagInput(false)
      props.setSessionObject({...props.sessionObject,"tagId": parseInt(e.target.id)})
    }
  }
  console.log(props.sessionObject)
  return (
    <div>
    <div className='StartSession'>
    <TagButton
        userTags={props.userTags}
        tagDropdownHandler={tagDropdownHandler}
        tagInput={tagInput}
        tagChange={props.tagChange}
        postNewTag={postNewTag}
        sessionObject={props.sessionObject}
      />      
      <form onSubmit={handleSession} id="timerform">
        <button className="start-session-btn" type="submit">Start Session</button>
        <input type="number" className="start-session-minutes-form" name="timeSpent" onChange={props.handleChange} placeholder="Enter session time in minutes"></input>
      </form>

    </div>
      </div>
  );
}
