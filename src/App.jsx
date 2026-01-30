import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [countToSet, setCountToSet] = useState(0);
  return (
    <>
      <h1>Counter is {count}</h1>
      <div className="card"> Counter is {count}</div>
      <div style={{ gap: 10 }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{ margin: "0 5px ", backgroundColor: "black", color: "white" }}
        >
          Increase
        </button>
        <button
          onClick={() => setCount((count) => Math.max(0, count - 1))}
          style={{ margin: "0 5px ", backgroundColor: "black", color: "white" }}
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ margin: "0 5px ", backgroundColor: "black", color: "white" }}
        >
          Reset
        </button>
      </div>
      <div style={{ margin: "20px 0" }}>
        <input
          style={{
            width: "100px",
            border: " 1px solid black",
            margin: "0 5px",
            padding: "0.6em 1.2em",
          }}
          type="text"
          placeholder="Set counter value"
          value={countToSet}
          onChange={(e) => setCountToSet(e.target.value)}
        />
        <button
          style={{
            margin: "0 5px",
          }}
          onClick={() => setCount(Number(countToSet))}
        >
          {countToSet}
        </button>
      </div>
    </>
  );
}

export default App;
