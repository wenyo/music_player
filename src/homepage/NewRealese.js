import React, { useContext } from 'react';

import MusicContext, { vAlbums, vSinger } from '../context/MusicContext';

import { Article, NewReleaseBox } from '../components/boxSize';
import { ViceTitle, NewReleaseWord, FontBold20 } from '../components/word';
import { BigImgBox } from '../components/img';

export default function NewRealese(){

    const { iSinger } = useContext(MusicContext);
    const singerName = vSinger[iSinger].singerName;

    return  <Article>
                <ViceTitle>New Realese</ViceTitle>
                <NewReleaseBox href={`../album/${singerName}/0`}>
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