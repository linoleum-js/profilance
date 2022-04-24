import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {uiLoginModalCloseAction} from "../../redux/ui";
import {userAuthenticateAction} from "../../redux/user";
import {selectUser} from "../../util/selectors";

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onCancel = () => {
    dispatch(uiLoginModalCloseAction());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(userAuthenticateAction({ username, password }));
  };

  const onUsernameChange = (e) => setUsername(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const canSubmit = username && password;

  return (
    <form onSubmit={onSubmit}>
      <div className="formGroup">
        {/*<label>Логин</label>*/}
        <input type="text" onChange={onUsernameChange} value={username} className="formControl" placeholder={'Логин'} />
      </div>
      <div className="formGroup">
        {/*<label>Пароль</label>*/}
        <input type="password" onChange={onPasswordChange} value={password} className="formControl" placeholder={'Пароль'} />
      </div>
      {user.error && (
        <div className={styles.loginForm_error}>{user.error}</div>
      )}
      <div className="formActions">
        <button type="button" onClick={onCancel} className="formButton">Отмена</button>
        <button className="formButton" disabled={!canSubmit}>Отправить</button>
      </div>
    </form>
  );
};



