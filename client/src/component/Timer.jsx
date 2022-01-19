import React from "react";

export default function Timer(props) {
  const handleSession = () => {
    sessionInterrupt()
    props.setSession(true);
  };
  const sessionInterrupt = () => {
    let remainingTime = props.initTime-props.time
    props.setSessionObject({...props.sessionObject,"timeSpent": remainingTime})
    props.setTime(0)
  }
  return (
    <div>
      <button onClick={handleSession}>End Session Early</button>
      <div>Time remaining: {props.hours} : {props.minutes} : {props.seconds} </div>
    </div>
  );
}
