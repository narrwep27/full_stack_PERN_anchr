import { useState, useEffect } from "react";
import { LoadUserSessions } from "../services/Session";
import { ResponsivePie } from '@nivo/pie'
export default function Summary(props) {
  // const [sessions, setSessions] = useState([]);

  const sessions = JSON.parse(localStorage.getItem("sessions"));

  //  useEffect(() => {
  //    const getSessions = async () => {
  //      const userSessions = await LoadUserSessions(localStorage.getItem("id"));
  //      setSessions(userSessions);
  //    };
  //    getSessions();
  //  }, []);
  console.log(sessions[0])
  const data = sessions.map(e=>{
    return {

      id:  e.Tag.description,
      label: e.Tag.description,
      value: e.timeSpent
    }
  })
  

  const timeArray = [];

  const sumNumbers = () => {
    sessions.map((e) => {
      return timeArray.push(e.timeSpent);
    });
  };
  sumNumbers();

  const sum = timeArray.reduce((a, r) => a + r);

  return (
    <div>
      <h1>Summary</h1>
      {sessions.map((e, i) => (
        <p key={i}>
          {e.Tag.description}: {e.timeSpent}
        </p>
      ))}
      <h3>Total time spent: {sum}</h3>
      <div className="chart-container">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              0.2
            ]
          ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              2
            ]
          ]
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
    />
    </div>
    </div>
  );
}
