import React from 'react';
import { vAlbums, Provider } from './context/MusicContext';
import Main from './homepage/Main';

export default function Album({ match }) {
    const sSinger = match.params.singer;
    const iAlbum = match.params.album;
    let iSinger = Object.keys(vAlbums).indexOf(sSinger);
    iSinger = iSinger === -1 ? 0 : iSinger;
    console.log(iSinger);
    return (
        <Provider value={{ iSinger }}>
            <Main />
        </Provider>
    );
}
