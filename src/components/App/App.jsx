import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';

import styles from './App.module.css';

export const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Profile {...user} />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />
    </>
  );
};
