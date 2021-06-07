import logo from './logo.svg';
import './App.css';
import { DateTime } from "luxon"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {formatDate("2021-05-06T10:00")}
        </a>
      </header>
    </div>
  );
}

export function formatDate(dateTime) {
  return DateTime.fromJSDate(parseReflexUtcDateTime(dateTime), { zone: "utc" })
    .setZone("America/Chicago")
    .toFormat("MM/dd/yyyy H:mma ZZZZ")
}


function parseReflexUtcDateTime(dateTime) {
  const b = dateTime.split(/\D/)
  return new Date(Date.UTC(b[0], b[1] - 1, b[2], b[3], b[4]))
}


export default App;
