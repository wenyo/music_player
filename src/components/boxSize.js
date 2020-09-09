import styled from 'styled-components';
import { color_gray3, color_white } from './variable';

export const Wrap = styled.div`
    background-color: ${color_gray3};
    width: 100vw;
    min-height: 100vh;
    font-family: 'Helvetica Neue';
`;

export const MainBox = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 50vw;
    padding: 2vw 0 0 8vw;
`;

export const ContentBox = styled.div`
    width: 50vw;
    padding-left: 50vw;
`;

export const Article = styled.div`
    padding: 20px 30px 20px 0;
`;

export const NewReleaseBox = styled.div`
    background-color: ${color_white};
    width: 100%;
    display: flex;
`;

export const OuterBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    &>div{
      margin-bottom: 30px; 
    }
`;

export const InnerBox = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
`;

export const InnerBox2 = styled(InnerBox)`
    align-items: center;
`;