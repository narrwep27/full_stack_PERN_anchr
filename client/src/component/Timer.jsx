import React, {useEffect, useState} from "react";

export default function Timer(props) {

  const handleSession = () => {
    props.setSession(true);
  };

  return (
    <div>
      <button onClick={handleSession}>End Session</button>
      <button onClick={()=>props.setStart(true)}>Start</button>
      <div>Time remaining: {props.hours} : {props.minutes} : {props.seconds} </div>
    </div>
  );
}
