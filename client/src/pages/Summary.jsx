import { useEffect, useState } from "react";
import { TotalAmount } from "../services/Session";

export default function Summary(props) {
  const sessions = JSON.parse(localStorage.getItem("sessions"));
  const id = localStorage.getItem("id");
  const [allTime, setAllTime] = useState([0]);

  const timeArray = [0];

  const sumNumbers = () => {
    sessions.map((e) => {
      return timeArray.push(e.timeSpent);
    });
  };

  sumNumbers();

  useEffect(() => {
    const getTotal = async () => {
      const res = await TotalAmount(id);
      setAllTime(res);
    };
    getTotal();
  }, []);

  const sum = timeArray.reduce((a, r) => a + r);

  const timeconversion = (t) => {
    let minutes = Math.floor(t / 60000);
    let seconds = ((t % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const totalTime = timeconversion(sum);

  return (
    <div>
      <h1>Summary</h1>
      {allTime.map((e, i) => (
        <p key={i}>
          {e.description}: {timeconversion(e.Total_Time)}
        </p>
      ))}
      <h3>Total time spent: {totalTime}</h3>
    </div>
  );
}
