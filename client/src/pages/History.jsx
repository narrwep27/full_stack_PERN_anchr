import { useState, useEffect } from "react";
import { LoadUserSessions } from '../services/Session';

function History(props) {  
  return (
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Tag</th>
          <th>Time</th>
        </tr>
        {props.sessions.map((e, i) => (
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