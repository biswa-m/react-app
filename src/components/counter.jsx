import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.id)}
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
    badgeClass += this.props.value ? "primary" : "warning";
    return badgeClass;
  }

  formatCount() {
    const { value } = this.props;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
