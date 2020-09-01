import React, { Fragment } from 'react';
import { Consumer } from '../context/MusicContext';

import { MainBox } from '../components/boxSize';
import { HomePageImg, HomePageImgBox, WhiteSquare } from '../components/img';
import { Title, Followers, Font_32 } from '../components/word';
import { WhiteBtn, OrangeBtn } from '../components/button';

export default function Main(){

    // 數字轉千分位
    const changeNumber2String = number => {
        let sNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return sNumber;
    };

    return (
        <MainBox>
            <Consumer>
                {value =>{
                    return(
                        <Fragment>
                            <HomePageImgBox >
                                <HomePageImg src={ value.singerInfo.singerImg }></HomePageImg>
                            </HomePageImgBox>
                            <WhiteSquare></WhiteSquare>
                            <Title>{ value.singerInfo.singerName }</Title>
                            <Followers>
                                <div>FOLLOWERS</div>
                                <Font_32>{ changeNumber2String(value.singerInfo.followers) }</Font_32>                                   
                            </Followers>
                        </Fragment>
                        )
                    }
                }
            </Consumer>
            <WhiteBtn>FOLLOW</WhiteBtn>
            <OrangeBtn>PLAY</OrangeBtn>
        </MainBox>
    )
}