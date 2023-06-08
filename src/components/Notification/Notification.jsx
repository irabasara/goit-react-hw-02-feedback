import css from './notification.module.css';
export const Notification = ({ message }) => (
  <p className={css.message}>{message}</p>
);
