import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.header}>
        <tr>
          <th className={styles.headerItem}>Type</th>
          <th className={styles.headerItem}>Amount</th>
          <th className={styles.headerItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr key={id} className={index %2 === 1 ? styles.row : ''}>
            <td className={styles.item}>{type}</td>
            <td className={styles.item}>{amount}</td>
            <td className={styles.item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
