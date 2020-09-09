import React, { useContext } from 'react';
import MusicContext, { vAlbums } from '../context/MusicContext';

import { Article, OuterBox, InnerBox } from '../components/boxSize';
import { ViceTitle, FontBold16 } from '../components/word';
import { BigImgBox2 } from '../components/img';

export default function RecentAlbum(){
    const { singerInfo } = useContext(MusicContext);
    const vSingerAlbum = vAlbums[singerInfo.singerName];

    return <Article>
            <ViceTitle>RecentAlbum</ViceTitle>
            <OuterBox>
                {
                    vSingerAlbum.map( ( vAlbum, idx ) => {
                        if( idx === 0 ) return false;
                        return <InnerBox key={idx}>
                            <BigImgBox2 imgUrl={vAlbum.albumImg}/>
                            <FontBold16>{vAlbum.name}</FontBold16>
                            <div>{vAlbum.year}</div>
                        </InnerBox>
                    })
                }
            </OuterBox>
        </Article>
}