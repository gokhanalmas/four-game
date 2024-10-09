import React from 'react';

import {
  MenuCtxWrapper,
  ButtonsWrapper,
  ButtonCtxWrapper,
  BtnText,
} from './MainMenuContextStyles';
import { MenuButton } from '../UI/menuButton/MenuButton';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as CPUMode } from '../../assets/images/player-vs-cpu.svg';
import { ReactComponent as PVPMode } from '../../assets/images/player-vs-player.svg';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { startGame } from '../../store/gameSlice';
import { toggleModal } from '../../store/modalSlice';

const MainMenuContext: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Game Rules button handler
  const gameRulesHandler = () => {
    navigate('/rules');
  };
  // PvP mode button handler
  const PvPhandler = () => {
    dispatch(startGame('PvP'));
    navigate('/game');
  };
  // CPUvP mode button handler
  const CPUvPHandler = () => {
    dispatch(toggleModal('mainMenu'));
  };

  return (
    <MenuCtxWrapper>
      <Logo />
      <ButtonsWrapper>
        <MenuButton bgColor="red" textcolor="white" onClick={CPUvPHandler}>
          <ButtonCtxWrapper>
            <BtnText>Oyuncu vs AI</BtnText>
            <CPUMode />
          </ButtonCtxWrapper>
        </MenuButton>
        <MenuButton bgColor="yellow" textcolor="black" onClick={PvPhandler}>
          <ButtonCtxWrapper>
            <BtnText>Oyuncu vs Oyuncu</BtnText>
            <PVPMode />
          </ButtonCtxWrapper>
        </MenuButton>
        <MenuButton
          bgColor="white"
          textcolor="black"
          onClick={gameRulesHandler}
        >
          <BtnText>Oyun Kuralları</BtnText>
        </MenuButton>
      </ButtonsWrapper>
    </MenuCtxWrapper>
  );
};

export default MainMenuContext;
