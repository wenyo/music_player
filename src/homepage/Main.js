import React, { Fragment, useContext } from 'react';
import MusicContext, { vSinger } from '../context/MusicContext';

import { MainBox } from '../components/boxSize';
import { HomePageImgBox } from '../components/img';
import { Title, Followers, FontBold32 } from '../components/word';
import { WhiteBtn, OrangeBtn } from '../components/button';

export default function Main(){

    const { iSinger } = useContext( MusicContext );

    // 數字轉千分位
    const changeNumber2String = number => {
        let sNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return sNumber;
    };

    return (
        <MainBox>
            <Fragment>
                <HomePageImgBox imgUrl={vSinger[iSinger].singerImg} />
                <Title>{ vSinger[iSinger].singerName }</Title>
                <Followers>
                    <div>FOLLOWERS</div>
                    <FontBold32>{ changeNumber2String(vSinger[iSinger].followers) }</FontBold32>                                   
                </Followers>
            </Fragment>
            <WhiteBtn>FOLLOW</WhiteBtn>
            <OrangeBtn>PLAY</OrangeBtn>
        </MainBox>
    )
}