import styled from 'styled-components';
import { color_white } from './variable';

export const HomePageImgBox = styled.div`
    max-width: 70vh;
    max-height: 70vh;
    width: 35vw;
    height: 35vw;
    overflow: hidden;
    text-align: center;
    margin-bottom: 15px;
    position: relative;
`;

export const HomePageImg = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
    top: -5vw;
    left: 0;
`;

export const WhiteSquare = styled.div`
    max-width: 70vh;
    max-height: 70vh;
    width: 35vw;
    height: 35vw;
    background: ${color_white};
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`;