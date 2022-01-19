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

  return (
    <div>
      <h1>Summary</h1>
      {sessions.map((e, i) => (
        <p key={i}>
          {e.Tag.description}: {e.timeSpent}
        </p>
      ))}
      <h3>Total time spent: {sum}</h3>
    </div>
  );
}
