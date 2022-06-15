import React, { FC } from 'react';

import { Figure } from '../models/figures/Figure';
import Sprite from './SVG/Sprite';

import '../styles/lost.scss';


interface ILostFigures {
  figures: Figure[];
};

const LostFigures: FC<ILostFigures> = ({ figures }) => {
  return (
    <div className='lost'>
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
