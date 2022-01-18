import React, { useEffect, useState } from "react";

export default function RecentSession(props) {
  let propsToDate = new Date(props.e.createdAt);
  const userDate = propsToDate.toString().slice(4, 16);
  const userTime = propsToDate.toString().slice(16, 24)

  return (
    <>
      <tr>
        <td>{userDate}</td>
        <td>{userTime}</td>
        <td>{props.e.tag_id}</td>
        <td>{props.e.timeSpent}</td>
      </tr>
    </>
  );
}
