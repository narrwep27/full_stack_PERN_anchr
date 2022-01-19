import StartSession from "../component/StartSession";
import Timer from "../component/Timer";
import { useState, useEffect } from "react";
import RecentSession from '../component/RecentSession'
import axios from "axios";
import { LoadUserSessions, AddSession } from "../services/Session";
const BASE_URL = 'http://localhost:3001/api'

export default function UserHome(props) {
  const [session, setSession] = useState(true);
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  const [sessionTag, setSessionTag] = useState('')
  const [sessions, setSessions] = useState([]);
  const [initTime, setInitTime]=useState(0)

  const handleChange=(e)=>{
    setTime(e.target.value*60000)
    setInitTime(e.target.value*60000)
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

  const getSessions = async () => {
    const userSessions = await LoadUserSessions(localStorage.getItem('id'));
    setSessions(userSessions);
  };

  const logSession = async () => {
    await AddSession(sessionObject)
    getSessions()
    setSession(true)
  }

  useEffect(()=>{
    getSessions()
    return getTags()
  },[])

  useEffect(()=>{
    let interval = null
    if (start){
      interval=setInterval(()=>{
        if (time>0){
          setTime(previousTime=>previousTime-10)
        } else {
          logSession()
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
      <h1>Welcome back, {props.user.username}</h1>
      {session ?
      <StartSession
        session={session}
        setSession={setSession}
        userTags={userTags}
        setUserTags={setUserTags}
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
        getTags={getTags}
      /> :
      <Timer
        session={session}
        setSession={setSession}
        time={time}
        setTime={setTime}
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        sessionObject={sessionObject}
        setSessionObject={setSessionObject}
        logSession={logSession}
        initTime={initTime}
        setInitTime={setInitTime}
      />}
      <table>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Tag</th>
          <th>Time Spent</th>
        </tr>
      {sessions.slice(0,5).map((e, i) => ( <RecentSession key={i} e={e}/>))}
      </table>
    </div>
  );
}
