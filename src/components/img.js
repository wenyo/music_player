import styled from 'styled-components';
import { color_white } from './variable';

const SquareBox = styled.div`
    overflow: hidden;
    background: url(${(props) => props.imgUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const HomePageImgBox = styled(SquareBox)`
    height: 0;
    width: 85%;
    padding-top: 85%;
    margin-bottom: 15px;
    position: relative;
    overflow: unset;
    &::before {
        content: '';
        background: ${color_white};
        width: 100%;
        height: 0;
        padding-top: 100%;
        position: absolute;
        top: -2vw;
        left: -8vw;
        z-index: -1;
    }
`;

export const SmallImgBox = styled(SquareBox)`
    width: 32px;
    height: 32px;
`;

export const BigImgBox = styled(SquareBox)`
    width: 30%;
    height: 0;
    padding-top: 30%;
`;

export const BigImgBox2 = styled(SquareBox)`
    width: 100%;
    height: 0;
    padding-top: 100%;
    margin-bottom: 8px;
    transition: all 0.3s;
`;

export const BigImgBox3 = styled(BigImgBox2)`
    width: 100%;
    height: 0;
    padding-top: 100%;
    margin-bottom: 8px;
    border-radius: 100%;
    background-position: top;
    transition: all 0.3s;
`;

export const SmallImg = styled.img`
    width: 100%;
    height: auto;
`;
