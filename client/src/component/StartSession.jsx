import { useEffect, useState } from "react";
import { LoadTagsByUserId } from "../services/Tag";

export default function StartSession(props) {
  const [tags, setTags] = useState([]);

  const getTags = async () => {
    let tags = await LoadTagsByUserId(localStorage.getItem('id'));
    setTags(tags);
  };
  const handleSession = () => {
    props.setSession(false);
    props.setStart(true)
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div>
      <button onClick={handleSession}>Start Session</button>
      <form>
        <select onChange={(e)=>{
          props.setSessionTag(e.target.value)
          props.setSessionObject({...props.sessionObject,"tagId": e.target.value})
        } 
          }>
          {tags.map((e, i) => (
            <option key={i} value={e.description}>{e.description}</option>
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
