import React, {Component} from "react";

import Section from "./Section";
import Counter from "./Counter";
import Statistics from "./Statistics";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ( 
        { good: prevState.good + 1,
        }));
};

  handleNeutral = () => {
    this.setState(prevState => (
        { neutral: prevState.neutral + 1,
        }));
};

  handleBad = () => {
    this.setState(prevState => (
        { bad: prevState.bad + 1,
        }));
};

  totalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  positiveFeedback = ({ good }) =>
    Math.round((good * 100) / this.totalFeedback(this.state));

  render () {
    // const { good, neutral, bad } = this.state;
  
    return (
     
      <Section
        title="Please leave feedback">

          <Counter
          good={this.handleGood}
          neutral={this.handleNeutral}
          bad={this.handleBad}
          />

          

      {/* options={Object.keys(this.state)}
      onLeaveFeedback={this.leaveFeedback} */}
         
      
         <Statistics
      currentGood={this.state.good}
      currentNeutral={this.state.neutral}
      currentBad={this.state.bad}
      total={this.totalFeedback(this.state)}
      positivePercentage={this.positiveFeedback(
        this.state)}
      
        />

        </Section>
     
    )
  };
}


export default App