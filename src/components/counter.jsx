import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClass() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.state.count ? "primary" : "warning";
    return badgeClass;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
