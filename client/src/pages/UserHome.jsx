import StartSession from "../component/StartSession";
import Timer from "../component/Timer";
import { useState, useEffect } from "react";

export default function UserHome(props) {
  const [session, setSession] = useState(true);
  const [time, setTime] = useState(0)
  const [start, setStart]=useState(false)
  const handleChange=(e)=>{
    setTime(e.target.value*60000)
  }
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
          alert('timer complete!')
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
      {session ? <StartSession session={session} setSession={setSession} optionArray={props.optionArray} historyArray={props.historyArray} /> : 
      <Timer 
        session={session} 
        setSession={setSession} 
        time={time} 
        setTime={setTime} 
        start={start}
        setStart={setStart}
        handleChange={handleChange} 
        seconds={seconds} 
        minutes={minutes} 
        hours={hours}  
      />}
      <input onChange={handleChange} placeholder="Enter session time"></input>
      <table>
        <tr>
          <th>Session</th>
          <th>Time</th>
        </tr>
        {props.historyArray.slice(-5).map((e, i) => (
          <tr>
            <td>{e.session}</td>
            <td>{e.time}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
