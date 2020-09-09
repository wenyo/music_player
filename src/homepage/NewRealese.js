import React, { useContext } from 'react';
import MusicContext, { vAlbums, vSinger } from '../context/MusicContext';

import { Article, NewReleaseBox } from '../components/boxSize';
import { ViceTitle, NewReleaseWord, FontBold20 } from '../components/word';
import { BigImgBox } from '../components/img';

export default function NewRealese(){

    const {sPageType,iSinger,iAlbum, changePage } = useContext(MusicContext);
    const singerName = vSinger[iSinger].singerName;
    console.log(iSinger)
    return  <Article>
                <ViceTitle>New Realese</ViceTitle>
                <NewReleaseBox>
                    <BigImgBox imgUrl={ vAlbums[singerName][0].albumImg }></BigImgBox>
                    <NewReleaseWord>
                        <FontBold20>{ vAlbums[singerName][0].name }</FontBold20>
                        <div>{ 
                            vAlbums[singerName][0].year + '.'
                            + vAlbums[singerName][0].month + '.'
                            + vAlbums[singerName][0].day 
                        }</div>                                    
                    </NewReleaseWord>

                </NewReleaseBox>
            </Article>
}