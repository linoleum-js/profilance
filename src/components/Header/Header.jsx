import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import classnames from 'classnames';

import { userLogoutAction } from '../../redux/user';
import {
  uiLoginModalOpenAction,
  uiPostModalOpenAction,
} from '../../redux/ui';

import Role from '../../models/Role';
import { canPost } from '../../util/permissions';
import { selectUser } from '../../util/selectors';

import styles from './Header.module.scss';

export const Header = () => {
  const dispatch = useDispatch();
  /** @type {IUserState} */
  const user = useSelector(selectUser);
  const userRole = user.data.role;
  const loggedIn = userRole !== Role.GUEST;

  const openLoginModal = () => dispatch(uiLoginModalOpenAction());
  const openPostModal = () => dispatch(uiPostModalOpenAction());

  const handleLoginClick = () => {
    if (loggedIn) {
      dispatch(userLogoutAction());
    } else {
      openLoginModal();
    }
  };

  return (
    <header className={styles.header}>
      <div className={classnames("container", styles.header_links)}>
        <NavLink to="/" className={styles.header_logo} />
        <NavLink to="/posts" className={styles.header_link}>Новости</NavLink>
        {canPost(userRole) && (
          <button onClick={openPostModal} className={styles.header_link}>
            Написать
          </button>
        )}
        <button onClick={handleLoginClick} className={styles.header_link}>
          {loggedIn ? 'Выйти' : 'Войти'}
        </button>
      </div>
    </header>
  );
};

