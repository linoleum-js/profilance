import Modal from 'react-modal';
import { LoginForm } from './LoginForm';
import { uiLoginModalCloseAction } from '../../redux/ui';
import { useDispatch, useSelector } from 'react-redux';
import { selectUi } from '../../util/selectors';

import styles from './LoginForm.module.scss';
import classnames from 'classnames';

export const LoginFormModal = () => {
  const dispatch = useDispatch();
  /** @type {IUiState} */
  const ui = useSelector(selectUi);

  const closeLoginModal = () => dispatch(uiLoginModalCloseAction());

  return (
    <Modal
      isOpen={ui.loginModalOpen}
      onRequestClose={closeLoginModal}
      className={classnames('modal', styles.loginForm_modal)}
    >
      <LoginForm
        onClose={closeLoginModal}
      />
    </Modal>
  );
};
