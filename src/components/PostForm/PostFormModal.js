import Modal from 'react-modal';
import PostForm from './PostForm';
import {uiPostModalCloseAction } from '../../redux/ui';
import { useDispatch, useSelector } from 'react-redux';
import { selectUi } from '../../util/selectors';
import classnames from 'classnames';

import styles from './PostForm.module.scss';

export const PostFormModal = () => {
  const dispatch = useDispatch();
  /** @type {IUiState} */
  const ui = useSelector(selectUi);
  const closePostModal = () => dispatch(uiPostModalCloseAction());

  return (
    <Modal
      isOpen={ui.postModalOpen}
      onRequestClose={closePostModal}
      className={classnames('modal', styles.postForm_modal)}
    >
      <PostForm
        onClose={closePostModal}
      />
    </Modal>
  );
};
