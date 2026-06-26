import styles from './RetirementNotice.module.css';

export const RetirementNotice = () => {
  return (
    <aside className={styles.notice} role="note">
      <span className={styles.tag}>Sunsetting</span>
      <p className={styles.text}>
        After many years, EVE&#8209;Incursions is being retired and will go offline later this year.
        It&rsquo;s no longer actively maintained. Thanks to everyone who flew with it. <span className={styles.salute}>o7</span>
      </p>
    </aside>
  );
};
