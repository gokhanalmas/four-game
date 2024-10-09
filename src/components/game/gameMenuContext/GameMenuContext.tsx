import React from 'react';

import {
  GameMenuCtxWrapper,
  GameMenuButtonsWrapper,
  GameMenuHeader,
  GameMenuBtnText,
} from './GameMenuContextStyles';
import { MenuButton } from '../../UI/menuButton/MenuButton';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks';
import { setModal, toggleModal } from '../../../store/modalSlice';
import { continueGame, quitGame, restartGame } from '../../../store/gameSlice';

const GameMenuContext: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Oyundan çıkış butonu işleyicisi
  const quitGameHandler = () => {
    navigate('/');
    dispatch(setModal({ modal: 'gameMenu', status: false }));
    dispatch(quitGame());
  };
  // Devam butonu işleyicisi
  const continueHandler = () => {
    dispatch(toggleModal('gameMenu'));
    dispatch(continueGame());
  };
  // Yeniden başlat butonu işleyicisi
  const restartHandler = () => {
    dispatch(toggleModal('gameMenu'));
    dispatch(restartGame());
  };

  return (
    <GameMenuCtxWrapper>
      <GameMenuHeader>duraklat</GameMenuHeader>
      <GameMenuButtonsWrapper>
        <MenuButton bgColor="white" textcolor="black" onClick={continueHandler}>
          <GameMenuBtnText>devam et</GameMenuBtnText>
        </MenuButton>
        <MenuButton bgColor="white" textcolor="black" onClick={restartHandler}>
          <GameMenuBtnText>yeniden başlat</GameMenuBtnText>
        </MenuButton>
        <MenuButton bgColor="red" textcolor="white" onClick={quitGameHandler}>
          <GameMenuBtnText>oyundan çık</GameMenuBtnText>
        </MenuButton>
      </GameMenuButtonsWrapper>
    </GameMenuCtxWrapper>
  );
};

export default GameMenuContext;
