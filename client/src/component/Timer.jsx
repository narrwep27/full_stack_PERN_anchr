import React, {useEffect, useState} from "react";

export default function Timer(props) {

  const handleSession = () => {
    props.setSession(true);
    // console.log(props.session);
  };
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
      <button onClick={handleSession}>End Session</button>
      {/* <div className="countdown">

        <div>hours {hours}</div>
        <div>minutes{minutes}</div>
        <div>seconds{seconds}</div>
      </div> */}
      <button onClick={()=>setStart(true)}>Start</button>
      <input onChange={handleChange} placeholder="Enter session time"></input>
      <div>Time remaining: {hours} : {minutes} : {seconds} </div>

      {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
    </div>
  );
}
