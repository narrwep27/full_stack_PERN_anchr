import StartSession from "../component/StartSession";
import Timer from "../component/Timer";
import { useState } from "react";

export default function UserHome(props) {
  const [session, setSession] = useState(true);

  return (
    <div>
      <h1>Welcome back, name</h1>
      {session ? <StartSession session={session} setSession={setSession} optionArray={props.optionArray} historyArray={props.historyArray} /> : <Timer session={session} setSession={setSession} />}
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
