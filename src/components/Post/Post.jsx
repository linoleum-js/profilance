
import moment from 'moment';

import styles from './Post.module.scss';

export const Post = ({ data, onApprove, onRemove, needsApprove }) => {

  const handleRemove = () => onRemove(data.id);
  const handleApprove = () => onApprove(data.id);

  return (
    <article className={styles.post}>
      <h3 className={styles.post_header}>{data.title}</h3>
      <p>{data.text}</p>
      <div className={styles.post_footer}>
        <div>
          {moment(data.createdAt).format('DD.MM.YYYY')}
        </div>
        {needsApprove &&
          <div>
            <button onClick={handleRemove} className="formButton">Удалить</button>
            <button onClick={handleApprove} className="formButton">Одобрить</button>
          </div>
        }
      </div>
    </article>
  );
};

