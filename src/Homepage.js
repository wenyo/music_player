import React from 'react';
import Main from './homepage/Main';
import TopSong from './homepage/TopSong';
import { ContentBox } from './components/boxSize';

export default function Homepage() {
    return <div>
        <Main />
        <ContentBox>
            <TopSong />
        </ContentBox>
    </div>
};
