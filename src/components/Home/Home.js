import {useSelector} from "react-redux";


export const Home = () => {
  const { username } = useSelector(state => state.user);
  const actualUsername = username ? username : 'Гость'

  return (
    <div>Привет, {actualUsername}</div>
  );
};
