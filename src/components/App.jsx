import React, { useState } from 'react';
import css from './App.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

const App = () => {
const [feedback, setFeedback] = useState({
  good: 0,
  bad: 0,
  neutral: 0
});


  // onLeaveFeedback = type => {
  //   this.setState(prevState => ({
  //     [type]: prevState[type] + 1,
  //   }));
  // };


const onLeaveFeedback = type => {
  setFeedback(prevState => ({
    ...prevState,
    [type] : prevState[type] +1
  }))
}



  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    return Math.round((good / countTotalFeedback()) * 100);
  };

 
    const options = Object.keys(feedback);
    return (
      <div className={css.container}>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback!!!" />
          )}
        </Section>
      </div>
    );
  }


export default App;
