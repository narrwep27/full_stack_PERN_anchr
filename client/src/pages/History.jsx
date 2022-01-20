import { useState, useEffect } from "react";
import { LoadUserById } from '../services/User';
import { LoadUserSessions } from '../services/Session';
import HistorySession from "../component/HistorySession";
import toast from 'react-hot-toast'

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

  useEffect(async () => {
    await getUser();
    getSessions();
  }, []);

  const deleteNotify = () => toast("Session Deleted", {style: { background: 'red', color: 'white'}});

  return (
    <div className="history-div">
      <div className="history-grid">
        <p className="history-date-col"><b>Date</b></p>
        <p className="history-tag-col"><b>Tag</b></p>
        <p className="history-time-col"><b>Time Focused</b></p>
        {sessions.map((index) => (
          <HistorySession key={index.id} session={index} allTags={user.Tags} getSessions={getSessions} deleteNotify={deleteNotify}/>
        ))}
      </div>
    </div>
  );
}

export default History;