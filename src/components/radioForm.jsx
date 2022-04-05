import React, { Component } from "react";
import RadioItem from "./radioItem";

class RadioForm extends Component {
  render() {
    console.log("entered");
    const { questions } = this.props;
    return (
      <div>
        {questions.map((question, index) => (
          <RadioItem key={index} label={question} />
        ))}
      </div>
    ); // (
    //   <div>
    //     {item.map((question) => (
    //       <RadioItem label={question} />
    //     ))}
    //   </div>
    // )
  }
}

export default RadioForm;
