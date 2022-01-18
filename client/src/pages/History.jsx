import { useState, useEffect } from "react";
import { LoadUserById } from '../services/User';
import { LoadUserSessions } from '../services/Session';
import { LoadTagsByUserId } from "../services/Tag";
import { EditSessionTag } from '../services/Session';

function History(props) {
  const [user, setUser] = useState({});
  const [sessions, setSessions] = useState([]);
  const [userTags, setUserTags] = useState([]);
  const [newTagId, setNewTagId] = useState('');

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
  const getTags = async () => {
    const userTags = await LoadTagsByUserId(localStorage.getItem('id'));
    setUserTags(userTags);
  };
  const changeSessTag = async (session, tag) => {
    let userTagIds = userTags.map((index) => {return index.id});
    if (userTagIds.includes(parseInt(newTagId))) {
      const newSess = await EditSessionTag(session, tag);
      setNewTagId('');
      getSessions();
    } else {
      console.log('no match');
    };
  };

  useEffect(() => {
    getUser();
    getSessions();
    getTags();
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
              <select value={newTagId} onChange={(e) => {setNewTagId(e.target.value)}}>
                <option value=''>--Select new tag--</option>
              {userTags.map((index) => (
                <option key={index.id} value={index.id}>{index.description}</option>
              ))}
              </select>
            </td>
            <td><button onClick={() => changeSessTag(index.id, newTagId)}>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default History;