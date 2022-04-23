import {useState} from "react";
import {useDispatch} from "react-redux";
import {uiLoginModalCloseAction} from "../../redux/ui";
import {userAuthenticateAction} from "../../redux/user";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onCancel = () => {
    dispatch(uiLoginModalCloseAction());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(userAuthenticateAction({ username, password }));
  };

  return (
    <form>
      <label>Имя</label>
      <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
      <label>Пароль</label>
      <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={onCancel}>Отмена</button>
      <button onClick={onSubmit}>Отправить</button>
    </form>
  );
};
