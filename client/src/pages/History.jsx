import { useState, useEffect } from "react";
import { LoadUserSessions } from '../services/Session';

function History(props) {  
  const [sessions, setSessions] = useState([]);

  const getSessions = async () => {
		const userSessions = await LoadUserSessions(localStorage.getItem('id'));
    let datedSess = userSessions.map((index) => {
      let date = new Date(index.createdAt)
      let newDate = date.toString().slice(4,15);
      return {...index, date: newDate};
    })
		setSessions(datedSess);
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
        {sessions.map((e) => (
          <tr key={e.id}>
            <td>{e.date}</td>
            <td>{e.Tag.description}</td>
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