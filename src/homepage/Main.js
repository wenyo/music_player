import React, { Fragment } from 'react';
import MusicContext from '../context/MusicContext';

import { MainBox } from '../components/boxSize';
import { HomePageImgBox } from '../components/img';
import { Title, Followers, FontBold32 } from '../components/word';
import { WhiteBtn, OrangeBtn } from '../components/button';

export default function Main(){

    // 數字轉千分位
    const changeNumber2String = number => {
        let sNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return sNumber;
    };

    return (
        <MainBox>
            <MusicContext.Consumer>
                {value =>{
                    return(
                        <Fragment>
                            <HomePageImgBox imgUrl={value.singerInfo.singerImg} />
                            <Title>{ value.singerInfo.singerName }</Title>
                            <Followers>
                                <div>FOLLOWERS</div>
                                <FontBold32>{ changeNumber2String(value.singerInfo.followers) }</FontBold32>                                   
                            </Followers>
                        </Fragment>
                        )
                    }
                }
            </MusicContext.Consumer>
            <WhiteBtn>FOLLOW</WhiteBtn>
            <OrangeBtn>PLAY</OrangeBtn>
        </MainBox>
    )
}