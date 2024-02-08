import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import styles from "./App.module.css";

import user from "data/user";
import data from "data/data";
import friends from "data/friends";

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Profile {...user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
    </div>
  );
};
