import React from "react";

export default function RecentSession(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Session</th>
          <th>Time</th>
        </tr>
        {props.sessions.slice(-5).map((e, i) => (
          <tr key={i}>
            <td>{e.createdAt}</td>
            <td>{e.tag_id}</td>
            <td>{e.timeSpent}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
