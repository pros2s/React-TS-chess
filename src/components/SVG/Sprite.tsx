import { FC, ReactNode } from 'react';


interface SpriteProps {
  id: string | null | undefined;
};

interface ISpritesArray {
  id: string;
  svgView: ReactNode;
};

const Sprite: FC<SpriteProps> = ({ id }) => {
  const sprites: ISpritesArray[] = [
    {
      //black pieces
      id: 'blackBishop',
      svgView:
        <svg viewBox="0 0 100 100">
          <g>
            <path d="M37,40c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2s-0.9,2-2,2H39C37.9,42,37,41.1,37,40z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34   c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M40.95,43   c-0.358,27.587-2.586,30.262-3.528,36h25.156c-0.942-5.738-3.17-8.413-3.528-36H40.95z M59,37c0,0,4-6,4-11   c0-4.411-10.112-13.489-12.496-19h-1.008c-0.871,2.015-2.776,4.506-4.842,7.072l4.24,8.48l-1.789,0.895l-3.834-7.668   C40.1,19.685,37,23.558,37,26c0,5,4,11,4,11H59z"/>
          </g>
        </svg>
    },
    {
      id: 'blackKing',
      svgView:
        <svg viewBox="0 0 100 100">
          <g>
            <path d="M37,36c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2s-0.9,2-2,2H39C37.9,38,37,37.1,37,36z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34   c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M37,20l0.615,2h24.77   L63,20l-11-4.231V11h2V7h-2V5h-4v2h-2v4h2v4.769L37,20z M59,33l3.077-10H37.923L41,33H59z M40.973,39   c-0.277,29.941-2.637,33.513-3.583,40H62.61c-0.946-6.487-3.306-10.059-3.583-40H40.973z"/>
          </g>
        </svg>
    },
    {
      id: 'blackKnight',
      svgView:
        <svg viewBox="0 0 100 100">
          <g>
            <path d="M31.375,40.219l1.249,1.562l-5.475,4.379C27.676,48.357,29.645,50,32,50c2.527,0,4.622-1.884,4.954-4.321l5.849-2.507   c2.944,2.45,7.337,2.296,10.097-0.465c2.924-2.924,2.924-7.682,0-10.606l0.707-0.707c1.605,1.605,2.49,3.74,2.49,6.01   c0,1.329-0.311,2.608-0.884,3.765l0,0c-0.196,0.396-0.425,0.775-0.681,1.139c-0.024,0.034-0.05,0.066-0.074,0.1   c-0.256,0.353-0.536,0.692-0.851,1.007c-0.276,0.276-0.57,0.523-0.873,0.752c-0.07,0.053-0.143,0.101-0.213,0.151   c-0.252,0.178-0.51,0.343-0.775,0.492c-1.508,0.843-3.216,1.203-4.894,1.057C45.944,52.159,40.545,57,34,57l2,22h28   c0-9.957,2.698-18.563,5.535-25.822C64.908,57.412,58.751,60,52,60v-1c13.785,0,25-11.215,25-25S65.785,9,52,9h-1v10h-1v-4h-7   c-3.866,0-7,3.134-7,7c0,1.831-16,7.76-16,16c0,3.38,2.395,6.199,5.58,6.855L31.375,40.219z M45.485,20.143l1.029,1.715l-5,3   l-1.029-1.715L45.485,20.143z M23.445,38.168l3-2l1.109,1.664l-3,2L23.445,38.168z M69,80c1.1,0,2,0.9,2,2s-0.9,2-2,2H31   c-1.1,0-2-0.9-2-2s0.9-2,2-2H69z M76,89c0,2.2-1.8,4-4,4H28c-2.2,0-4-1.8-4-4s1.8-4,4-4h44C74.2,85,76,86.8,76,89z"/>
          </g>
        </svg>
    },
    {
      id: 'blackPawn',
      svgView:
        <svg viewBox="0 0 100 100">
          <g>
            <path d="M37,38c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2s-0.9,2-2,2H39C37.9,40,37,39.1,37,38z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34   c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M50,35   c7.18,0,13-5.82,13-13S57.18,9,50,9s-13,5.82-13,13S42.82,35,50,35z M58,41H42c0,33.478-4.052,33.959-5.99,38H63.99   C62.052,74.959,58,74.478,58,41z"/>
          </g>
        </svg>
    },
    {
      id: 'blackQueen',
      svgView:
        <svg viewBox="0 0 100 100">
          <g>
            <path d="M63,36c0,1.1-0.9,2-2,2H39c-1.1,0-2-0.9-2-2s0.9-2,2-2h22C62.1,34,63,34.9,63,36z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34   c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M40.973,39   c-0.277,29.941-2.637,33.513-3.583,40H62.61c-0.946-6.487-3.306-10.059-3.583-40H40.973z M34.965,23l3.89,10h22.291l3.89-10H34.965   z M65.424,22l2.44-6.275l-3.729-1.45l-1.361,3.501c-1.851-0.886-5.641-1.543-10.218-1.724C53.432,15.318,54,14.231,54,13   c0-2.208-1.791-4-4-4s-4,1.792-4,4c0,1.231,0.568,2.318,1.443,3.052c-4.577,0.181-8.367,0.838-10.218,1.724l-1.361-3.501   l-3.729,1.45L34.576,22H65.424z"/>
          </g>
        </svg>
    },
    {
      id: 'blackRook',
      svgView:
        <svg viewBox="0 0 100 100">
          <g>
            <path d="M31,25V10h7v6h6v-6h12v6h6v-6h7v15c0,2.2-1.8,4-4,4H35C32.8,29,31,27.2,31,25z M65,34c1.1,0,2-0.9,2-2s-0.9-2-2-2H35   c-1.1,0-2,0.9-2,2s0.9,2,2,2H65z M30,84h40c1.1,0,2-0.9,2-2s-0.9-2-2-2H30c-1.1,0-2,0.9-2,2S28.9,84,30,84z M73,85H27   c-2.2,0-4,1.8-4,4s1.8,4,4,4h46c2.2,0,4-1.8,4-4S75.2,85,73,85z M68.262,79C66.464,72.751,62,70.139,62,35H38   c0,35.139-4.464,37.751-6.262,44H68.262z"/>
          </g>
        </svg>
    },

    //white pieces
    {
      id: 'whiteBishop',
      svgView:
        <svg fill='#fff' viewBox="0 0 100 100">
          <g>
            <path d="M37,40c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2s-0.9,2-2,2H39C37.9,42,37,41.1,37,40z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34   c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M40.95,43   c-0.358,27.587-2.586,30.262-3.528,36h25.156c-0.942-5.738-3.17-8.413-3.528-36H40.95z M59,37c0,0,4-6,4-11   c0-4.411-10.112-13.489-12.496-19h-1.008c-0.871,2.015-2.776,4.506-4.842,7.072l4.24,8.48l-1.789,0.895l-3.834-7.668   C40.1,19.685,37,23.558,37,26c0,5,4,11,4,11H59z"/>
          </g>
        </svg>
    },
    {
      id: 'whiteKing',
      svgView:
        <svg fill='#fff' viewBox="0 0 100 100">
          <g>
            <path d="M37,36c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2s-0.9,2-2,2H39C37.9,38,37,37.1,37,36z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34   c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M37,20l0.615,2h24.77   L63,20l-11-4.231V11h2V7h-2V5h-4v2h-2v4h2v4.769L37,20z M59,33l3.077-10H37.923L41,33H59z M40.973,39   c-0.277,29.941-2.637,33.513-3.583,40H62.61c-0.946-6.487-3.306-10.059-3.583-40H40.973z"/>
          </g>
        </svg>
    },
    {
      id: 'whiteKnight',
      svgView:
        <svg fill='#fff' viewBox="0 0 100 100">
          <g>
            <path d="M31.375,40.219l1.249,1.562l-5.475,4.379C27.676,48.357,29.645,50,32,50c2.527,0,4.622-1.884,4.954-4.321l5.849-2.507   c2.944,2.45,7.337,2.296,10.097-0.465c2.924-2.924,2.924-7.682,0-10.606l0.707-0.707c1.605,1.605,2.49,3.74,2.49,6.01   c0,1.329-0.311,2.608-0.884,3.765l0,0c-0.196,0.396-0.425,0.775-0.681,1.139c-0.024,0.034-0.05,0.066-0.074,0.1   c-0.256,0.353-0.536,0.692-0.851,1.007c-0.276,0.276-0.57,0.523-0.873,0.752c-0.07,0.053-0.143,0.101-0.213,0.151   c-0.252,0.178-0.51,0.343-0.775,0.492c-1.508,0.843-3.216,1.203-4.894,1.057C45.944,52.159,40.545,57,34,57l2,22h28   c0-9.957,2.698-18.563,5.535-25.822C64.908,57.412,58.751,60,52,60v-1c13.785,0,25-11.215,25-25S65.785,9,52,9h-1v10h-1v-4h-7   c-3.866,0-7,3.134-7,7c0,1.831-16,7.76-16,16c0,3.38,2.395,6.199,5.58,6.855L31.375,40.219z M45.485,20.143l1.029,1.715l-5,3   l-1.029-1.715L45.485,20.143z M23.445,38.168l3-2l1.109,1.664l-3,2L23.445,38.168z M69,80c1.1,0,2,0.9,2,2s-0.9,2-2,2H31   c-1.1,0-2-0.9-2-2s0.9-2,2-2H69z M76,89c0,2.2-1.8,4-4,4H28c-2.2,0-4-1.8-4-4s1.8-4,4-4h44C74.2,85,76,86.8,76,89z"/>
          </g>
        </svg>
    },
    {
      id: 'whitePawn',
      svgView:
        <svg fill='#fff' viewBox="0 0 100 100">
          <g>
            <path d="M37,38c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2s-0.9,2-2,2H39C37.9,40,37,39.1,37,38z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34   c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M50,35   c7.18,0,13-5.82,13-13S57.18,9,50,9s-13,5.82-13,13S42.82,35,50,35z M58,41H42c0,33.478-4.052,33.959-5.99,38H63.99   C62.052,74.959,58,74.478,58,41z"/>
          </g>
        </svg>
    },
    {
      id: 'whiteQueen',
      svgView:
        <svg fill='#fff' viewBox="0 0 100 100">
          <g>
            <path d="M63,36c0,1.1-0.9,2-2,2H39c-1.1,0-2-0.9-2-2s0.9-2,2-2h22C62.1,34,63,34.9,63,36z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34   c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M40.973,39   c-0.277,29.941-2.637,33.513-3.583,40H62.61c-0.946-6.487-3.306-10.059-3.583-40H40.973z M34.965,23l3.89,10h22.291l3.89-10H34.965   z M65.424,22l2.44-6.275l-3.729-1.45l-1.361,3.501c-1.851-0.886-5.641-1.543-10.218-1.724C53.432,15.318,54,14.231,54,13   c0-2.208-1.791-4-4-4s-4,1.792-4,4c0,1.231,0.568,2.318,1.443,3.052c-4.577,0.181-8.367,0.838-10.218,1.724l-1.361-3.501   l-3.729,1.45L34.576,22H65.424z"/>
          </g>
        </svg>
    },
    {
      id: 'whiteRook',
      svgView:
        <svg fill='#fff' viewBox="0 0 100 100">
          <g>
            <path d="M31,25V10h7v6h6v-6h12v6h6v-6h7v15c0,2.2-1.8,4-4,4H35C32.8,29,31,27.2,31,25z M65,34c1.1,0,2-0.9,2-2s-0.9-2-2-2H35   c-1.1,0-2,0.9-2,2s0.9,2,2,2H65z M30,84h40c1.1,0,2-0.9,2-2s-0.9-2-2-2H30c-1.1,0-2,0.9-2,2S28.9,84,30,84z M73,85H27   c-2.2,0-4,1.8-4,4s1.8,4,4,4h46c2.2,0,4-1.8,4-4S75.2,85,73,85z M68.262,79C66.464,72.751,62,70.139,62,35H38   c0,35.139-4.464,37.751-6.262,44H68.262z"/>
          </g>
        </svg>
    }
  ];

  const svgPiece = sprites.find((sprite) => sprite.id === id);

  return (
    <div className='figure'>
      { svgPiece?.svgView }
    </div>
  );
};


export default Sprite;
