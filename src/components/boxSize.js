import styled from 'styled-components';
import { color_gray3, color_white, color_black, color_gray1 } from './variable';

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

export const NewReleaseBox = styled.a`
    background-color: ${color_white};
    width: 100%;
    display: flex;
    text-decoration: unset;
    transition: all .3s;
    color: ${color_black};
    &:hover{
        box-shadow: 0 0 10px ${color_gray1};
    }
`;

export const OuterBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    &>a{
      margin-bottom: 30px; 
    }
`;

export const InnerBox = styled.a`
    width: 30%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    text-decoration: unset;
    transition: all .3s;
    color: ${color_black};
    &:hover div:first-child:hover{
        box-shadow: 0 0 10px ${color_gray1};
    }
    &:hover div{
        text-decoration: underline;
    }
`;

export const InnerBox2 = styled(InnerBox)`
    align-items: center;
`;