import StatisticItem from 'components/StatisticItem/StatisticItem';
import styles from './Statistics.module.css';

const Statistics = ({ title, data }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {data.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
