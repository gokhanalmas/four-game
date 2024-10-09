import React from 'react';

import { WinneroWrapper, WinnerName, WinnerText } from './WinnerStyles';
import { SmallButton } from '../smallButton/SmallButton';
import { useAppDispatch } from '../../../store/hooks';
import { playAgain } from '../../../store/gameSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const Winner: React.FC = () => {
  const dispatch = useAppDispatch();
  const game = useSelector((state: RootState) => state.game);

  // Beraberlik durumunda isim gösterilmez ve durum 'beraberlik' olur
  // Kazanan varsa, doğru oyuncu adı ve kazanan durumu gösterilir
  let name = '';
  let status = 'beraberlik';
  if (game.winner && game.winner !== 'tie') {
    name = game[game.winner].name;
    // Gramer kontrolü
    status = name === 'Sen' ? 'kazandın' : 'kazandı';
  }

  // Tekrar oyna butonu işleyicisi
  const playAgainHandler = () => {
    dispatch(playAgain());
  };

  return (
    <WinneroWrapper data-testid="winner">
      <WinnerName data-testid="winner-name">{name}</WinnerName>
      <WinnerText data-testid="game-status">{status}</WinnerText>
      <SmallButton onClick={playAgainHandler}>Tekrar Oyna</SmallButton>
    </WinneroWrapper>
  );
};

export default Winner;
