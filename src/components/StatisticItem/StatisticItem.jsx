import styles from './StatisticItem.module.css';

const StatisticItem = ({label, percentage}) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticItem;