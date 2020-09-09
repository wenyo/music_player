import React, { useContext } from 'react';
import MusicContext, { vAlbums, vSinger } from '../context/MusicContext';

import { Article } from '../components/boxSize';
import { ViceTitle, TopSongLi, TopSongUl } from '../components/word';
import { SmallImgBox } from '../components/img';

export default function TopSong(){

    const { iSinger } = useContext( MusicContext );
    const singer = vSinger[iSinger].singerName;
    const vAlbumNow = vAlbums[singer];

    const iAllSong = getAllSong();
    const iTop = 5 < iAllSong ? 5 : iAllSong;

    const vTopSong = getTopSongArray();

    // get all songs
    function getAllSong(){
        let iSongs = 0;
        for (const album of vAlbums[singer]) {
            iSongs += album.song.length || 0;
        }
        return iSongs;
    }

    // get random number
    function getRandomInt (min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    }
    function getTopSongNum( min, max, array, iAlbum ) {
        let iNum = getRandomInt(min, max);
        if(array.indexOf(iAlbum + '_' + iNum) === -1){
            return iNum;
        }else{
            return getTopSongNum(min, max, array, iAlbum);
        }
    }

    // get random array
    function getTopSongArray(){
        let vTopSong = [];
        let vTopSongCompare = [];
        for (let idx = 0; idx < iTop; idx++) {
            let iAlbum = getRandomInt( 0, vAlbumNow.length );
            let iSong = getTopSongNum( 0, vAlbumNow[iAlbum].song.length, vTopSongCompare, iAlbum );
            vTopSongCompare.push( iAlbum + '_' + iSong )
            vTopSong.push( [iAlbum, iSong] )
        }
        return vTopSong;
    }

    return <Article>
        <ViceTitle>Top Songs</ViceTitle>
        <TopSongUl>
            {
                vTopSong.map( value => (
                    <TopSongLi key={ value[0] + '_' + value[1] } data-music={ vAlbumNow[value[0]]['song'][[value[1]]].url } >
                        <SmallImgBox imgUrl={vAlbumNow[value[0]]['albumImg'] } />
                        <span className='song_name'>{ vAlbumNow[value[0]]['song'][[value[1]]].name }</span>
                        <span>{ vAlbumNow[value[0]]['song'][[value[1]]].time }</span>
                        <img src='./icon/play_icon_x2.png' alt=''/>
                    </TopSongLi>
                ))
            }
        </TopSongUl>
    </Article>
}