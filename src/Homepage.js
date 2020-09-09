import React, { Fragment, useState } from 'react';
import { vPageType, vSinger, vAlbums, Provider } from './context/MusicContext';

import Main from './homepage/Main';
import TopSong from './homepage/TopSong';
import NewRealese from './homepage/NewRealese';
import RecentAlbum from './homepage/RecentAlbum';
import Recommend from './homepage/Recommend';

import { ContentBox } from './components/boxSize';

export default function Homepage() {

    const [ sPageType, setPageType ] = useState( vPageType[0] );
    const [ iSinger, setSinger ] = useState( 0 );
    const [ iAlbum, setAlbum ] = useState( 0 );

    const changePage = ( iType, idx ) => {
        setPageType( vPageType[iType] );
        if( iType === 0 ) {
            setSinger( idx );
        }else if( iType === 1 ){
            setAlbum( idx );
        }
    }

    const contextValue = {
        sPageType,
        iSinger,
        iAlbum,
        palyingSong: '',
        changePage,
    }

    return <Fragment>
        <Provider value={ contextValue }>
            <Main />
            {
                sPageType === vPageType[0] &&
                <ContentBox>
                   <TopSong />
                    <NewRealese />
                    <RecentAlbum />
                    <Recommend />
                </ContentBox>                
            }
            {
                sPageType === vPageType[1] &&
                'album'
            }
        </Provider>
    </Fragment>
};
