import React, { useEffect, useState } from "react";

export default function RecentSession(props) {
  let propsToDate = new Date(props.e.createdAt);
  const userDate = propsToDate.toString().slice(4, 16);
  const userTime = propsToDate.toString().slice(16, 24);
  const timeInMinutes = Math.floor((props.e.timeSpent / 60000) * 10) / 10;

  return (
    <>
      <tr>
        <td>{userDate}</td>
        <td>{userTime}</td>
        <td>{props.e.tag_id}</td>
        <td>{timeInMinutes}</td>
      </tr>
    </>
  );
}
