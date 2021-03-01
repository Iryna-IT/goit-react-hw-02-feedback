import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from '../components/Section';
import FeedbackOptions from '../components/FedbackOptions';
import Statistics from '../components/Statistics';

import './App.css';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  static defaultProps = {};
  static propTypes = {};

  handleFeedback = (event) => {
    const option = event.target.value;
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  }
  
 
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  };
  
  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = this.state.good;
    const totalFeedback = this.countTotalFeedback();
    return Math.round((positiveFeedback / totalFeedback) * 100)
  };


  render() {
    return (
      <div className='app'>
        <Section heading="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback}></FeedbackOptions>
        </Section>
        <Section heading="Statistics">
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
        </Section>
      </div>
    )
  }
 }
 
export default App;
