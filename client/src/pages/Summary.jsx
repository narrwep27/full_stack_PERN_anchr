import React, { useEffect, useState } from "react";
import { TotalAmount } from "../services/Session";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { randomColor } from "randomcolor";

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

  const data = allTime.map((e, i) => {
    return { description: e.description, total_time: Math.round((parseInt(e.total_time) / sum) * 10000) / 100, fill: randomColor() };
  });

  const totalTime = timeconversion(sum);
  console.log(data)

  return (
    <div className="Summary">
      <div className="summary-each-item">
        <h1>Summary</h1>
        {allTime.map((e, i) => (
          <div key={i}>
            {e.description}: {timeconversion(e.total_time)}
          </div>
        ))}
        <h3>Total time spent: {totalTime}</h3>
      </div>

      <div className="piechart-div">
        <PieChart width={500} height={500}>
          <Pie paddingAngle={1} innerRadius={150} outerRadius={250} nameKey="description" dataKey="total_time" isAnimationActive={true} data={data} ></Pie>
          {data.map((entry, index) => (
            <Cell fill="#36078E" />
          ))}
          <Tooltip label="Total Time" />
        </PieChart>
      </div>
    </div>
  );
}
