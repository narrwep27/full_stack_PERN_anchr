export default function UserHome() {
  const optionArray = [{ session: "Running" }, { session: "Studying" }, { session: "Walking" }, { session: "Gaming" }];




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
        {/* Map history here */}
        <tr>
          <td>Running</td>
          <td>44:00</td>
        </tr>
      </table>
    </div>
  );
}
