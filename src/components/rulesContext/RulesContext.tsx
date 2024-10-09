import React from 'react';

import {
  RulesCtxWrapper,
  RulesHeader,
  RulesTextWrapper,
  RulesSubHeader,
  RulesItem,
} from './RulesContextStyles';

import { ReactComponent as ButtonIcon } from '../../assets/images/icon-check.svg';

import { useNavigate } from 'react-router-dom';

const RulesContext: React.FC = () => {
  const navigate = useNavigate();

  // Geri dön butonu işleyicisi
  const clickHandler = () => {
    navigate('/');
  };

  return (
    <RulesCtxWrapper>
      <RulesHeader>Kurallar</RulesHeader>
      <RulesTextWrapper>
        <div>
          <RulesSubHeader>amaç</RulesSubHeader>
          <p>
            Aynı renkteki 4 diski üst üste (dikey, yatay veya çapraz olarak)
            bağlayan ilk oyuncu olun.
          </p>
        </div>
        <div>
          <RulesSubHeader>nasıl oynanır</RulesSubHeader>

          <RulesItem>
            <h4>1</h4>
            <span>İlk oyunda kırmızı önce başlar.</span>
          </RulesItem>
          <RulesItem>
            <h4>2</h4>
            <span>
              Oyuncular sıralı olarak oynar ve her turda sadece bir disk
              bırakılabilir.
            </span>
          </RulesItem>
          <RulesItem>
            <h4>3</h4>
            <span>
              Oyun, 4'lü bir sıra oluştuğunda veya beraberlikle sona erer.
            </span>
          </RulesItem>
          <RulesItem>
            <h4>4</h4>
            <span>
              Önceki oyunun başlangıç oyuncusu, bir sonraki oyunda ikinci olarak
              oynar.
            </span>
          </RulesItem>
        </div>
        <ButtonIcon onClick={clickHandler} data-testid="confirm-button" />
      </RulesTextWrapper>
    </RulesCtxWrapper>
  );
};

export default RulesContext;
