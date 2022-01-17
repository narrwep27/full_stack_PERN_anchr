import React, {useEffect, useState} from "react";

export default function Timer(props) {

  const handleSession = () => {
    props.setSession(true);
    console.log(props.session);
  };
  const [time, setTime] = useState(300000)
  const [start, setStart]=useState(false)
  
  let seconds = ("0"+(Math.floor((time/1000)%60)%60)).slice(-2)
  let minutes = ("0"+Math.floor((time/60000)%60)).slice(-2)
  let hours = ("0"+Math.floor((time/3600000)%60)).slice(-2)

  useEffect(()=>{
    let interval = null
    if (start){
      interval=setInterval(()=>{
        if (time>0){
          setTime(previousTime=>previousTime-10)
        }
      },10)
    } else {
      clearInterval(interval)
    }
    return ()=> clearInterval(interval)
  },[start])

  return (
    <div>
      <button onClick={handleSession}>End Session</button>
      <div className="countdown">

        <div>hours {hours}</div>
        <div>minutes{minutes}</div>
        <div>seconds{seconds}</div>
      </div>
      <button onClick={()=>setStart(true)}>Start</button>
      <div>{hours} : {minutes} : {seconds} </div>
      {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
    </div>
  );
}
