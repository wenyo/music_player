import React from 'react';
import MusicContext, {vAlbums} from '../context/MusicContext';

import { Article, NewReleaseBox } from '../components/boxSize';
import { ViceTitle, NewReleaseWord, FontBold20 } from '../components/word';
import { BigImgBox } from '../components/img';

export default function NewRealese(){
    return  <Article>
                <ViceTitle>New Realese</ViceTitle>
                <MusicContext.Consumer>
                    {
                        value => (
                            <NewReleaseBox>
                                <BigImgBox imgUrl={ vAlbums[value.singerInfo.singerName][0].albumImg }></BigImgBox>
                                <NewReleaseWord>
                                    <FontBold20>{ vAlbums[value.singerInfo.singerName][0].name }</FontBold20>
                                    <div>{ 
                                        vAlbums[value.singerInfo.singerName][0].year + '.'
                                        + vAlbums[value.singerInfo.singerName][0].month + '.'
                                        + vAlbums[value.singerInfo.singerName][0].day 
                                    }</div>                                    
                                </NewReleaseWord>

                            </NewReleaseBox>
                        )
                    }
                </MusicContext.Consumer>
            </Article>
}