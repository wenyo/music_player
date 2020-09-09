import React, { Fragment } from 'react';
import Main from './homepage/Main';
import TopSong from './homepage/TopSong';
import NewRealese from './homepage/NewRealese';
import RecentAlbum from './homepage/RecentAlbum';
import Recommend from './homepage/Recommend';

import { ContentBox } from './components/boxSize';

export default function Homepage() {
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
