import React, { useEffect } from 'react';

import { TimerWrapper, PlayerName, Time } from './TimerStlyes';

import TurnRed from '../../../assets/images/turn-background-red.svg';
import TurnYellow from '../../../assets/images/turn-background-yellow.svg';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import {
  selectTurn,
  selectTimer,
  selectCurrentPlayer,
  selectIsGamePaused,
  updateTimer,
  changeTurn,
} from '../../../store/gameSlice';

const bgs: { [key: string]: string } = {
  red: TurnRed,
  yellow: TurnYellow,
};

const textColor: { [key: string]: string } = {
  red: 'var(--color-white)',
  yellow: 'var(--color-black)',
};

const Timer: React.FC = () => {
  const game = useSelector((state: RootState) => state.game);
  const turn = useAppSelector(selectTurn);
  const timer = useAppSelector(selectTimer);
  const isGamePaused = useAppSelector(selectIsGamePaused);
  const currentPlayer = useAppSelector(selectCurrentPlayer);

  const dispatch = useAppDispatch();

  const player =
    game[currentPlayer].name === 'You' ? 'your' : game[currentPlayer].name;

  useEffect(() => {
    if (isGamePaused) return;
    const timeout = setTimeout(function () {
      console.log('minus: ', timer);
      const newTime = timer - 1;
      dispatch(updateTimer(newTime));
      if (newTime <= 0) {
        dispatch(changeTurn());
      }
    }, 1000);

    return () => {
      // this should work flawlessly besides some milliseconds lost here and there
      clearTimeout(timeout);
    };
  }, [dispatch, timer, isGamePaused]);

  return (
    <TimerWrapper bg={bgs[turn]} textcolor={textColor[turn]}>
      <PlayerName>{player}'s turn</PlayerName>
      <Time>{timer}s</Time>
    </TimerWrapper>
  );
};

export default Timer;
