import { useState, useEffect } from "react";
import { LoadUserSessions } from '../services/Session';
import { LoadUserById } from '../services/User'

function History(props) {  
  const [user, setUser] = useState({});
  const [sessions, setSessions] = useState([]);

  const getUser = async () => {
    let currentUser = await LoadUserById(props.user.id);
    setUser(currentUser);
  };
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
    getUser();
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
        {sessions.map((index) => (
          <tr key={index.id}>
            <td>{index.date}</td>
            <td>{index.Tag.description}</td>
            <td>{index.timeSpent} mins</td>
            <td>
              <select>
                <option value=''>--Select new tag--</option>
              {user.Tags.map((index) => (
                <option key={index.id} value={index.description}>{index.description}</option>
              ))}
              </select>
            </td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default History;