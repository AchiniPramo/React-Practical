import {Component} from "react";
import './App.css';
import {Counter} from "./Counter/Counter";

class App extends Component {
    render() {
        return (
            <div className = "app">
                {/*<Counter></Counter>*/}
                <Counter/>
            </div>
        );
    }
}

export default App;