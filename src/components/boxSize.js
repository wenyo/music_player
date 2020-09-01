import styled from 'styled-components';
import { color_gray3 } from './variable';

export const Wrap = styled.div`
    background-color: ${color_gray3};
    width: 100vw;
    min-height: 100vh;
    font: Helvetica Neue;
`;

export const MainBox = styled.div`
    width: 50vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 5vw 0 0 5vw;
`;

export const ContentBox = styled.div`
    width: 50vw;
    padding-left: 50vw;
`;

export const Article = styled.div`
    padding: 5vh 0;
`;