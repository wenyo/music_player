import React, { Fragment } from 'react';
import { vAlbums } from './context/MusicContext';

import Main from './homepage/Main';
import TopSong from './homepage/TopSong';
import NewRealese from './homepage/NewRealese';
import RecentAlbum from './homepage/RecentAlbum';
import Recommend from './homepage/Recommend';

import { ContentBox } from './components/boxSize';

export default function Homepage({match}) {
    console.log(match.params.singer);
    console.log(Object.keys(vAlbums).indexOf(match.params.singer));

    return <Fragment>
                <Main />
                <ContentBox>
                    <TopSong />
                    <NewRealese />
                    <RecentAlbum />
                    <Recommend />
                </ContentBox>    
            </Fragment>
};
