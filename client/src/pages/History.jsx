import { useState, useEffect } from "react";
import { LoadAllSessions } from '../services/Session';

function History(props) {
  const [sessions, setSessions] = useState([]);

  const getSessions = async () => {
    const allSessions = await LoadAllSessions();
    setSessions(allSessions);
  };

  useEffect(async () => {
    getSessions();
  }, [])
  
  return (
    <div>
      <table>
        <tr>
          <th>Session</th>
          <th>Time</th>
        </tr>
        {props.historyArray.map((e, i) => (
          <tr>
            <td>{e.session}</td>
            <td>{e.time}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default History;