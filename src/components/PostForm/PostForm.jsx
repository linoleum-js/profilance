
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postsCreateAction } from '../../redux/posts';
import { uiPostModalCloseAction } from '../../redux/ui';
import classnames from 'classnames';

import styles from './PostForm.module.scss';

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

  const canSubmit = title && text;

  return (
    <div>
      <div className="formGroup">
        <label className="formLabel">Заголовок</label>
        <input type="text" onChange={onTitleChange} value={title} className="formControl" />
      </div>
      <div className="formGroup">
        <label className="formLabel">Текст</label>
        <textarea
          onChange={onTextChange}
          value={text}
          className={classnames('formTextarea', styles.postForm_textarea)}
        />
      </div>

      <div className="formActions">
        <button className="formButton" onClick={onCancel}>Отмена</button>
        <button className="formButton" disabled={!canSubmit} onClick={onSubmit}>Отправить</button>
      </div>
    </div>
  );
};

export default PostForm;
