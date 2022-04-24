import { useSelector } from 'react-redux';
import { selectUser } from '../../util/selectors';

import styles from './Home.module.scss';

export const Home = () => {
  const user = useSelector(selectUser);
  const username = user.data.username;
  const actualUsername = username ? username : 'Гость'

  return (
    <div className="container">
      <h1 className={styles.home_text}>Привет, {actualUsername}</h1>
    </div>
  );
};
