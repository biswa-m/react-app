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
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.handleDelete}
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
}

export default Counters;
