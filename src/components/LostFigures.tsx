import React, { FC } from 'react';

import { Figure } from '../models/figures/Figure';
import Sprite from './SVG/Sprite';

import '../styles/lost.scss';


interface ILostFigures {
  figures: Figure[];
  position: string;
};

const LostFigures: FC<ILostFigures> = ({ figures, position }) => {
  return (
    <div className={[ 'lost', position === 'up' ? 'lost--up' : 'lost--down' ].join(' ') }>
      {
        figures.map((figure) => {
          return (
            <React.Fragment key={ figure.id }>
              <Sprite id={ figure.pieceId } lost={ true }/>
            </React.Fragment>
          )
        })
      }
    </div>
  );
};


export default LostFigures;
