export default function Summary(props) {
  const sessions = JSON.parse(localStorage.getItem("sessions"));

  const timeArray = [];

  const sumNumbers = () => {
    sessions.map((e) => {
      return timeArray.push(e.timeSpent);
    });
  };
  sumNumbers();

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
      {sessions.map((e, i) => (
        <p key={i}>
          {e.Tag.description}: {timeconversion(e.timeSpent)}
        </p>
      ))}
      <h3>Total time spent: {totalTime}</h3>
    </div>
  );
}
