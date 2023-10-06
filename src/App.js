import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      result: ""
    };
  }

  handleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(this.state.input);
        this.setState({ result: result.toString() });
      } catch (error) {
        this.setState({ result: "Error" });
      }
    } else if (value === "Clear") {
      this.setState({ input: "", result: "" });
    } else if (value === "←") {
      // Handle backspace
      this.setState((prevState) => ({
        input: prevState.input.slice(0, -1)
      }));
    } else {
      this.setState((prevState) => ({ input: prevState.input + value }));
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="heading">
          <h2>CALCULATOR</h2>
        </div>
        <div className="display">
          <input
            type="text"
            value={this.state.input}
            readOnly
            className="input"
          />
          <input
            type="text"
            value={this.state.result}
            readOnly
            className="result"
          />
        </div>
        <div className="buttons">
          <button onClick={() => this.handleClick("7")}>7</button>
          <button onClick={() => this.handleClick("8")}>8</button>
          <button onClick={() => this.handleClick("9")}>9</button>
          <button className="operators" onClick={() => this.handleClick("+")}>
            +
          </button>
          <button onClick={() => this.handleClick("4")}>4</button>
          <button onClick={() => this.handleClick("5")}>5</button>
          <button onClick={() => this.handleClick("6")}>6</button>
          <button className="operators" onClick={() => this.handleClick("-")}>
            -
          </button>
          <button onClick={() => this.handleClick("1")}>1</button>
          <button onClick={() => this.handleClick("2")}>2</button>
          <button onClick={() => this.handleClick("3")}>3</button>
          <button className="operators" onClick={() => this.handleClick("*")}>
            *
          </button>
          <button
            className="operators equal"
            onClick={() => this.handleClick("=")}
          >
            =
          </button>
          <button onClick={() => this.handleClick("0")}>0</button>
          <button className="operators" onClick={() => this.handleClick("←")}>
            ←
          </button>
          <button className="operators" onClick={() => this.handleClick("/")}>
            /
          </button>
        </div>
        <div className="button-column">
          <button
            className="operators"
            onClick={() => this.handleClick("Clear")}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default App;
