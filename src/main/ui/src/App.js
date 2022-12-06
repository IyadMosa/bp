import './App.css';
import {Button, TextField} from "@iyadmosa/react-library/dist/esm";
import {useState} from "react";

function App() {


    const [name, setName] = useState("");

    return (
        <div>
            <TextField title={"rrrrff"}
                       value={name}
                       onChange={(value) => setName(value)}
                       disabled={false}></TextField>
            <Button label={"test222"}></Button>

        </div>
    );
}

export default App;
