import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Modal from 'react-modal';

import Role from "../../models/Role";
import {userLogoutAction} from "../../redux/user";
import {
  uiLoginModalCloseAction,
  uiLoginModalOpenAction,
  uiPostModalOpenAction,
  uiPostModalCloseAction,
} from '../../redux/ui';
import {LoginForm} from "../LoginForm";
import PostForm from "../PostForm/PostForm";


export const Header = () => {
  const dispatch = useDispatch();
  /** @type {IUserState} */
  const user = useSelector(state => state.user);
  /** @type {IUiState} */
  const ui = useSelector(state => state.ui);

  const loggedIn = user.data.role !== Role.GUEST;
  const canCreatePosts = user.data.role === Role.USER || true;

  const closeLoginModal = () => dispatch(uiLoginModalCloseAction());
  const openLoginModal = () => dispatch(uiLoginModalOpenAction());
  const closePostModal = () => dispatch(uiPostModalCloseAction());
  const openPostModal = () => dispatch(uiPostModalOpenAction());

  const handleLoginClick = () => {
    if (loggedIn) {
      dispatch(userLogoutAction());
    } else {
      openLoginModal();
    }
  };

  return (
    <header>
      <div>
        <Link to="/">главная</Link>
      </div>
      <div>
        <Link to="/posts">Новости</Link>
        {canCreatePosts && (
          <button onClick={openPostModal}>
            Написать
          </button>
        )}
        <button onClick={handleLoginClick}>
          {loggedIn ? 'Выйти' : 'Войти'}
        </button>
      </div>

      <Modal
        isOpen={ui.loginModalOpen}
        onRequestClose={closeLoginModal}
      >
        <LoginForm
          onClose={closeLoginModal}
        />
      </Modal>

      <Modal
        isOpen={ui.postModalOpen}
        onRequestClose={closePostModal}
      >
        <PostForm
          onClose={closePostModal}
        />
      </Modal>
    </header>
  );
};

