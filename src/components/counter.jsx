import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value || 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.state.value ? "primary" : "warning";
    return badgeClass;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
