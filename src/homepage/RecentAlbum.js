import React, { useContext } from 'react';
import MusicContext, { vAlbums, vSinger } from '../context/MusicContext';

import { Article, OuterBox, InnerBox } from '../components/boxSize';
import { ViceTitle, FontBold16 } from '../components/word';
import { BigImgBox2 } from '../components/img';

export default function RecentAlbum(){
    const { iSinger } = useContext(MusicContext);
    const singerName = vSinger[iSinger].singerName;
    const vSingerAlbum = vAlbums[singerName];

    return <Article>
            <ViceTitle>RecentAlbum</ViceTitle>
            <OuterBox >
                {
                    vSingerAlbum.map( ( vAlbum, iAlbum ) => {
                        if( iAlbum === 0 ) return false;
                        return  <InnerBox key={iAlbum}  href={`../album/${singerName}/${iAlbum}`}>
                                    <BigImgBox2 imgUrl={vAlbum.albumImg}/>
                                    <FontBold16>{vAlbum.name}</FontBold16>
                                    <div>{vAlbum.year}</div>
                                </InnerBox>
                    })
                }
            </OuterBox>
        </Article>
}