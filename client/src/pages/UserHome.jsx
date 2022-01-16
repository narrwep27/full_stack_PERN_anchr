export default function UserHome() {
  const optionArray = [{ session: "Running" }, { session: "Studying" }, { session: "Walking" }, { session: "Gaming" }];

  const historyArray = [
    { session: "Running", time: "44:15" },
    { session: "Walking", time: "1:15:15" },
    { session: "Studying", time: "15:10" },
    { session: "Reading", time: "45:00" },
  ];

  return (
    <div>
      <button>Start Session</button>
      <form>
        <select>
          {optionArray.map((e, i) => (
            <option>{e.session}</option>
          ))}
        </select>
      </form>
      <input placeholder="Enter new tag"></input>
      <table>
        <tr>
          <th>Session</th>
          <th>Time</th>
        </tr>
        {historyArray.map((e, i) => (
          <tr>
            <td>{e.session}</td>
            <td>{e.time}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
