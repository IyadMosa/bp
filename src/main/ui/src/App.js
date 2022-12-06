import logo from './logo.svg';
import './App.css';
import {Button, TextField} from "@iyadmosa/react-library/dist/esm";
import {useState} from "react";

function App() {


    const [name, setName] = useState("");

    return (
    <div className="App">
      <TextField title={"rrrrff"}
                 value={name}
                 onChange={(value) => setName(value)}
                 disabled={false}></TextField>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button label={"test222"}></Button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
