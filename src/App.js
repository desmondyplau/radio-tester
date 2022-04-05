import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RadioItem from "./components/radioItem";
import RadioForm from "./components/radioForm";
import questions from "./components/questions";

class App extends Component {
  state = {
    questions: questions.questions,
    radio: [],
  };

  render() {
    //console.log("from app", this.state.questions);
    return (
      <main className="container">
        <RadioForm questions={this.state.questions} />
      </main>
    );
  }
}

export default App;
