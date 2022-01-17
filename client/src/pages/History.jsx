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
  }, []);
  
  return (
    <div>
      <table>
        <tr>
          <th>Session</th>
          <th>Tag</th>
          <th>Time</th>
        </tr>
        {sessions.map((e, i) => (
          <tr>
            <td>Session ID: {e.id}</td>
            <td>Tag ID: {e.tag_id}</td>
            <td>{e.timeSpent} mins</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default History;