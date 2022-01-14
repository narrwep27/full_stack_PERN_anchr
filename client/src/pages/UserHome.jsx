export default function UserHome() {
  return (
    <div>
      <button>Start Session</button>
      <form>
        {/* Map selections here */}
        <select>
          <option>Running</option>
          <option>Studying</option>
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
