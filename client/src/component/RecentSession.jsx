import React, { useEffect, useState } from "react";

export default function RecentSession(props) {
  let propsToDate = new Date(props.e.createdAt);
  const userDate = propsToDate.toString().slice(4, 16);
  const userTime = propsToDate.toString().slice(16, 24);
  const timeconversion = (t) =>{
    let minutes = Math.floor(t/60000)
    let seconds = ((t%60000)/1000).toFixed(0)
    return minutes+":"+(seconds<10?'0':'')+seconds
  }
  let displaytime = timeconversion(props.e.timeSpent)
  return (
    <>
      <tr>
        <td>{userDate}</td>
        <td>{userTime}</td>
        <td>{props.e.Tag.description}</td>
        <td>{displaytime}</td>
      </tr>
    </>
  );
}
