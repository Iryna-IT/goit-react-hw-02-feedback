import React, { Component } from 'react';

import Section from '../components/Section';
import FeedbackOptions from '../components/FedbackOptions';
import Statistics from '../components/Statistics';

import styles from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    const option = event.target.value;
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = this.state.good;
    const totalFeedback = this.countTotalFeedback();
    return Math.round((positiveFeedback / totalFeedback) * 100);
  };

  render() {
    return (
      <div className={styles.app}>
        <Section heading="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section heading="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
