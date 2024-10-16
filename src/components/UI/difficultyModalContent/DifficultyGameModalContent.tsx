import React from 'react';
import { modalVariants } from '../../../frameMotinVariats/frameMotionVariants';
import { useAppDispatch } from '../../../store/hooks';
import { startGame, setCPULevel } from '../../../store/gameSlice';
import { setModal } from '../../../store/modalSlice';
import { useNavigate } from 'react-router-dom';

import {
  Header,
  DifficultyList,
  DifficultyItem,
  DifficultyWrapper,
} from './DifficultyGameModalContentStyles';

const DifficaltyGameModalContent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // CPU için zorluk seviyesini seç, seviye minimax algoritması için derinliği belirler
  // kolay - derinlik 2
  // orta - derinlik 6
  // zor - derinlik 8
  const selectDifficultyHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const difficultyLevel = e.currentTarget.getAttribute('data-difficulty')!;

    dispatch(setCPULevel(+difficultyLevel || 2));
    dispatch(setModal({ modal: 'mainMenu', status: false }));
    dispatch(startGame('CPUvP'));
    navigate('/game');
  };
  return (
    <DifficultyWrapper
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Header>Zorluk Seçin</Header>
      <DifficultyList>
        <DifficultyItem data-difficulty="2" onClick={selectDifficultyHandler}>
          kolay
        </DifficultyItem>
        <DifficultyItem data-difficulty="6" onClick={selectDifficultyHandler}>
          normal
        </DifficultyItem>
        <DifficultyItem data-difficulty="8" onClick={selectDifficultyHandler}>
          zor
        </DifficultyItem>
      </DifficultyList>
    </DifficultyWrapper>
  );
};

export default DifficaltyGameModalContent;
