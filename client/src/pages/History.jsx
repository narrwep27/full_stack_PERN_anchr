import React from "react";

function History(props) {
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
