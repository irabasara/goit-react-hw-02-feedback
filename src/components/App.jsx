import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const { good, neutral } = this.state;

    const totalFeedback = this.countTotalFeedback() - neutral;
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  }

  render() {
    Section.propTypes = { title: PropTypes.string };
    FeedbackOptions.propTypes = {
      options: PropTypes.arrayOf(PropTypes.string),
      onLeaveFeedback: PropTypes.func,
    };
    Statistics.propTypes = {
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
      total: PropTypes.number,
      positivePercentage: PropTypes.number,
    };
    Notification.propTypes = {
      message: PropTypes.string,
    };

    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        )}
      </>
    );
  }
}
