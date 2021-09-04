import React, { Component } from "react";
// import { FeedBackOptions } from './FeedBackOptions/FeedBackOptions
import { Container } from "./Container/Container";
import { Btn } from "./App.styled";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  OnInrement = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  createBtn = (option) => (
    <Btn key={option} type="button" onClick={() => this.OnInrement(option)}>
      {option}
    </Btn>
  );

  createBtns = () => Object.keys(this.state).map(this.createBtn);

  totalfeedbacks = ({ good, neutral, bad }) => good + neutral + bad;
  positivePercentage = ({ good, neutral, bad }) =>
    Math.round((good * 100) / (good + neutral + bad));

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <h1>
          Please leave feedback
          <div>{this.createBtns()}</div>
        </h1>
        <h2>Statistics</h2>
        {
          good || neutral || bad > 0 ? (
            <>
              <p> good: {good}</p>
              <p>neutral: {neutral}</p>
              <p>bad: {bad}</p>
              <p>Total: {this.totalfeedbacks({ good, neutral, bad })}</p>
              <p>
                Positive feedback:{" "}
                {this.positivePercentage({ good, neutral, bad })}%
              </p>
            </>
          ) : (
            <p>No feedback given</p>
          )
          // : (<Notification message="No feedback given"></Notification>)
        }
      </Container>
    );
  }
}
