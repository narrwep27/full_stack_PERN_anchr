import StartSession from "../component/StartSession";
import Timer from "../component/Timer";
import { useState, useEffect } from "react";
import RecentSession from '../component/RecentSession'

export default function UserHome(props) {
  const [session, setSession] = useState(true);
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  const [sessionTag, setSessionTag] = useState('')
  const handleChange=(e)=>{
    setTime(e.target.value*60000)
    setSessionObject({...sessionObject,"timeSpent": e.target.value*60000})
   }
  const [sessionObject,setSessionObject] =useState({
    timeSpent: 0,
    tagId: '',
    userId: 'get userId after login'
  })
  let seconds = ("0"+(Math.floor((time/1000)%60)%60)).slice(-2)
  let minutes = ("0"+Math.floor((time/60000)%60)).slice(-2)
  let hours = ("0"+Math.floor((time/3600000)%60)).slice(-2)

  useEffect(()=>{
    let interval = null
    if (start){
      interval=setInterval(()=>{
        if (time>0){
          setTime(previousTime=>previousTime-10)
        }  else {
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

  },[start,time])
  return (
    <div>
      <h1>Welcome back, name</h1>
      {session ?
      <StartSession
        session={session}
        setSession={setSession}
        optionArray={props.optionArray}
        historyArray={props.historyArray}
        start={start}
        setStart={setStart}
        handleChange={handleChange}
        sessionTag={sessionTag}
        setSessionTag={setSessionTag}
        sessionObject={sessionObject}
        setSessionObject={setSessionObject}
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
