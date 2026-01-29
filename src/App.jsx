import "./App.css";

function App() {
  return (
    <>
      <h1>Counter</h1>
      <div className="card"> Counter is 32</div>
      <div style={{ gap: 10 }}>
        <button
          onClick={() => {}}
          style={{ margin: "0 5px ", backgroundColor: "black", color: "white" }}
        >
          Increase
        </button>
        <button
          onClick={() => {}}
          style={{ margin: "0 5px ", backgroundColor: "black", color: "white" }}
        >
          Decrease
        </button>
        <button
          onClick={() => {}}
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
          value="3"
          onChange={() => {}}
        />
        <button
          style={{
            margin: "0 5px",
          }}
          onClick={() => {}}
        >
          Set to 8
        </button>
      </div>
    </>
  );
}

export default App;
