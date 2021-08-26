import './App.css';
import {useState} from "react";

export default function App() {     //kann nur eine default function haben
    const [counter, setCounter] = useState(0)

    function buttonHandler() {
        console.log("Button was clicked");
    }

    function zaehlerplus() {
        setCounter(counter + 1);
        console.log(counter);
    }

    function zaehlerminus() {
        setCounter(counter - 1);
        console.log(counter);
    }

    return ( //JSX kein HTML
        <div className="App">
            <header className="App-header">
                Hello World
                <button onClick={buttonHandler}>click me</button>
                <button onClick={zaehlerplus}>zahl plus eins</button>
                <button onClick={zaehlerminus}>zahl minus eins</button>
                <p>{counter}</p>
            </header>
        </div>
    );
}