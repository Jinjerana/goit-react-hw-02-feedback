import { Component } from 'react';

import Section from './Section';
import Counter from './Counter';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  totalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  positiveFeedback = ({ good }) =>
    Math.round((good * 100) / this.totalFeedback(this.state));

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedback(this.state);
    const positive = this.positiveFeedback(this.state);

    return (
      <Section title="Please leave feedback">
        <Counter
          options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback}
        />

        {total ? (
          <Statistics
            currentGood={good}
            currentNeutral={neutral}
            currentBad={bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification msg="There is no feedback" />
        )}
      </Section>
    );
  }
}

export default App;
