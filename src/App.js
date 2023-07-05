import logo from "./logo.svg";
import "./App.css";
import { Button, Timeline } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timeline
          items={[
            {
              children: "Create a services site 2015-09-01",
            },
            {
              children: "Solve initial network problems 2015-09-01",
            },
            {
              children: "Technical testing 2015-09-01",
            },
            {
              children: "Network problems being solved 2015-09-01",
            },
          ]}
        />
      </header>
    </div>
  );
}

export default App;
