import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 1 },
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
            <h4>{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }

  handleDelete = id => {
    const counters = this.state.counters.filter(x => x.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(x => {
      x.value = 0;
      return x;
    });
    this.setState({ counters });
  };

  handleIncrement = id => {
    const counters = this.state.counters.map(x => {
      x.id === id && x.value++;
      return x;
    });
    this.setState({ counters });
  };
}

export default Counters;
