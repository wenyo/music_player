import styled from 'styled-components';
import { color_white, color_orange, color_black } from './variable';

const Button = styled.button`
    height: 34px;
    padding: 8px 40px;
    margin: 0 10px;
    border-radius: 22px;
    cursor: pointer;
    transition: all .3s;
`;

export const WhiteBtn = styled(Button)`
    background: ${color_white};
    color: ${color_black};
    border: 1px solid ${color_black};
    :hover{
        background: ${color_black};
        color: ${color_white};
    }
`;

export const OrangeBtn = styled(Button)`
    background: ${color_orange};
    border: 1px solid ${color_orange};
    color: ${color_white};
    :hover{
        background: ${color_white};
        color: ${color_orange};
    }
`;