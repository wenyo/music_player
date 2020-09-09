import React, { useContext } from 'react';
import MusicContext, { vSinger } from '../context/MusicContext';

import { Article, OuterBox, InnerBox2 } from '../components/boxSize';
import { ViceTitle, FontBold16 } from '../components/word';
import { BigImgBox3 } from '../components/img';

export default function Recommand(){
    const { iSinger } = useContext(MusicContext);

    return <Article>
            <ViceTitle>You May Like...</ViceTitle>
            <OuterBox>
                {
                    vSinger.map((singerVal, idx) => {
                        if(singerVal.singerName ===  vSinger[iSinger].singerName) return false;
                        return <InnerBox2 key={idx}>
                            <BigImgBox3 imgUrl={singerVal.singerImg}></BigImgBox3>
                            <FontBold16>{singerVal.singerName}</FontBold16>
                        </InnerBox2>
                    })
                }
            </OuterBox>
        </Article>
}