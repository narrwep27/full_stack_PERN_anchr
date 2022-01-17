import React from "react";

export default function StartSession(props) {
  const handleSession = () => {
    props.setSession(false);
    // console.log(props.session);
  };

  return (
    <div>
      <button onClick={handleSession}>Start Session</button>
      <form>
        <select>
          {props.optionArray.map((e, i) => (
            <option>{e.session}</option>
          ))}
        </select>
      </form>
      <form>
        <input placeholder="Enter new tag"></input>
      </form>
    </div>
  );
}
