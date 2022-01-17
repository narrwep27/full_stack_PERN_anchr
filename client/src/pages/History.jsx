import { useState, useEffect } from "react";
import { LoadUserSessions } from '../services/Session';
import { LoadByTagId } from '../services/Tag';

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

  useEffect(() => {
    getSessions();
  }, []);
  
  return (
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Tag</th>
          <th>Time</th>
        </tr>
        {sessions.map((e, i) => (
          <tr key={e.id}>
            <td>{e.createdAt}</td>
            <td>Tag ID: {e.tag_id}</td>
            <td>{e.timeSpent} mins</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default History;