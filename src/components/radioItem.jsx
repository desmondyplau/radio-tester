import React, { Component } from "react";

class RadioItem extends Component {
  constructor() {
    super();
    this.onchangeValue = this.onchangeValue.bind(this);
  }

  onchangeValue(event) {
    console.log(event);
  }

  render() {
    return (
      <div onChange={this.onchangeValue}>
        <label>{this.props.label}</label>
        <input type="radio" value="Yes" name="radioAnswer" />
        Yes
        <input type="radio" value="No" name="radioAnswer" />
        No
      </div>
    );
  }
}

export default RadioItem;
