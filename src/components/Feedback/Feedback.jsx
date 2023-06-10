import css from './feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttonsWrapper}>
    {options.map(option => (
      <button
        className={`${css.feedbackButtons} ${css.feedbackButtons.hover}`}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);
