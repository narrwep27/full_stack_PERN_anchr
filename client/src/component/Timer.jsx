import React from "react";

export default function Timer(props) {
  const handleSession = () => {
    props.setSession(true);
    console.log(props.session);
  };

  return (
    <div>
      <button onClick={handleSession}>End Session</button>
    </div>
  );
}
