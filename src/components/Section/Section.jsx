import css from './section.module.css';

export const Section = ({ title, children }) => (
  <section className={css.section}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);
