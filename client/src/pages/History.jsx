import { useState, useEffect } from "react";
import { LoadUserSessions } from '../services/Session';

function History(props) {
  const [sessions, setSessions] = useState([]);
  const [user, setUser] = useState({
    id: 13,
    email: '',
    username: ''
  });

  const getSessions = async () => {
    const allSessions = await LoadUserSessions(user.id);
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