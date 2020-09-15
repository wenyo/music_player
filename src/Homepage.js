import React from 'react';
import { vAlbums, Provider } from './context/MusicContext';

import Main from './homepage/Main';
import TopSong from './homepage/TopSong';
import NewRealese from './homepage/NewRealese';
import RecentAlbum from './homepage/RecentAlbum';
import Recommend from './homepage/Recommend';

import { ContentBox } from './components/boxSize';

export default function Homepage({match}) {

    const sSinger = match.params.singer;
    let iSinger = Object.keys(vAlbums).indexOf(sSinger);
    iSinger = iSinger === -1 ? 0 : iSinger;

    return <Provider value={{iSinger}}>
                <Main />
                <ContentBox>
                    <TopSong />
                    <NewRealese />
                    <RecentAlbum />
                    <Recommend />
                </ContentBox>    
            </Provider>
};
