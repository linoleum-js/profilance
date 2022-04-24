import styles from './GlobalPreloader.module.scss';
import { useSelector } from 'react-redux';
import { selectUi } from '../../util/selectors';

// Not the most elegant of doing this, but I tired to keep it simple

export const GlobalPreloader = () => {
  /** @type {IUiState} */
  const ui = useSelector(selectUi);

  return (
    ui.preloaderVisible ?
      <div className={styles.preloader_overlay}>
        <div className={styles.preloader_spinner} />
      </div> : null
  );
};
