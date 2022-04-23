
import { useState } from 'react';
import {useDispatch} from "react-redux";
import {postsCreateAction} from "../../redux/posts";
import {uiPostModalCloseAction} from "../../redux/ui";

const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onTitleChange = (e) => setTitle(e.target.value);
  const onTextChange = (e) => setText(e.target.value);

  const onCancel = () => {
    dispatch(uiPostModalCloseAction());
  };
  const onSubmit = () => {
    dispatch(postsCreateAction({ title, text }));
  };

  return (
    <div>
      <label>Заголовок</label>
      <input type="text" onChange={onTitleChange} value={title} />
      <label>Текст</label>
      <textarea onChange={onTextChange} value={text} />
      <button onClick={onCancel}>Отмена</button>
      <button onClick={onSubmit}>Отправить</button>
    </div>
  );
};

export default PostForm;
