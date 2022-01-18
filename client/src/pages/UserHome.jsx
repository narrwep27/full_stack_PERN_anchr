import StartSession from "../component/StartSession";
import Timer from "../component/Timer";
import { useState, useEffect } from "react";
import RecentSession from '../component/RecentSession'
import axios from "axios";
const BASE_URL = 'http://localhost:3001/api'

export default function UserHome(props) {
  const [user, setUser] = useState({});
  const [session, setSession] = useState(true);
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  const [sessionTag, setSessionTag] = useState('')
  const handleChange=(e)=>{
    setTime(e.target.value*60000)
    setSessionObject({...sessionObject,[e.target.name]: e.target.value*60000})
    
  }
  const tagChange=(e)=>{
    setNewTag({...newTag, "userId": parseInt(props.user_id), [e.target.name]: e.target.value})
  }
  const [sessionObject,setSessionObject] =useState({
    timeSpent: 0,
    tagId: '',
    userId: props.user_id
  })
  const [newTag, setNewTag]= useState({
    description:'',
    color: '',
		userId: 0
  })
  let seconds = ("0"+(Math.floor((time/1000)%60)%60)).slice(-2)
  let minutes = ("0"+Math.floor((time/60000)%60)).slice(-2)
  let hours = ("0"+Math.floor((time/3600000)%60)).slice(-2)
  const getTags = async () =>{
      const res = await axios.get(`${BASE_URL}/tag/user/${props.user_id}`)
      setUserTags(res.data)
  }
  const [userTags, setUserTags]=useState([])
  // console.log(userTags)
  
  useEffect(()=>{
    return getTags()
  },[])

  const getUser = async () => {
    let currentUser = await LoadUserById(localStorage.getItem('id'));
    setUser(currentUser);
  };

  useEffect(()=>{
    getUser();
    let interval = null
    if (start){
      interval=setInterval(()=>{
        if (time>0){
          setTime(previousTime=>previousTime-10)
        } else {
          alert(`timer complete! Posted tag will be ${JSON.stringify(sessionObject)}`)
          setStart(false)
        }
      },10)
    } else {
      setStart(false)
      clearInterval(interval)
    }
    return ()=>{
      clearInterval(interval)
    }
  },[start,time,sessionObject])
  return (
    <div>
      <h1>Welcome back, {user.username}</h1>
      {session ? 
      <StartSession 
        session={session} 
        setSession={setSession} 
        optionArray={userTags} 
        historyArray={props.historyArray}
        start={start}
        setStart={setStart}
        handleChange={handleChange}
        sessionTag={sessionTag}
        setSessionTag={setSessionTag}
        sessionObject={sessionObject}
        setSessionObject={setSessionObject}
        newTag={newTag}
        tagChange={tagChange}
      /> : 
      <Timer 
        session={session} 
        setSession={setSession} 
        time={time} 
        setTime={setTime} 
        seconds={seconds} 
        minutes={minutes} 
        hours={hours}  
      />}
      <RecentSession sessions={props.sessions}/>
    </div>
  );
}
