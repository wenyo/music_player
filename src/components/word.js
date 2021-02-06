import styled from 'styled-components';
import { color_gray1 } from './variable';

export const Title = styled.div`
    font-size: 64px;
    text-decoration: underline;
    letter-spacing: 0px;
    font-weight: bold;
`;

export const Followers = styled.div`
    margin: 30px 30px 30px 0;
    display: inline-block;
`;
export const ViceTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const TopSongUl = styled.ul`
    counter-reset: num;
`;

export const TopSongLi = styled.li`
    width: 100%;
    margin: 6px 0;
    display: flex;
    align-items: center;
    position: relative;

    & > span {
        margin-left: 20px;
    }

    & > .song_name {
        width: 50%;
    }

    & > img {
        margin-left: 20px;
        width: 28px;
        height: auto;
        position: absolute;
        right: 0;
    }

    &::before {
        counter-increment: num;
        content: counter(num);
        margin-right: 30px;
    }

    &::after {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -3px;
        background-color: ${color_gray1};
    }
`;

export const NewReleaseWord = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Bold = styled.div`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 4px;
`;

export const FontBold32 = styled(Bold)`
    font-size: 32px;
`;

export const FontBold20 = styled(Bold)`
    font-size: 20px;
`;

export const FontBold16 = styled(Bold)`
    font-size: 16px;
`;
