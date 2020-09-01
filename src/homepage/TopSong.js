import React, { Fragment } from 'react';
import { Consumer, vAlbums } from '../context/MusicContext';

import { Article } from '../components/boxSize';
import { ViceTitle } from '../components/word';

export default function TopSong(){

    const iTop = 5;
    const vSong = getSong();
    const vTopSongNum = getgetTopSongArray();

    // get all songs
    function getSong(){
        let vSong = [];
        for (const singer in vAlbums) {
            for (const album of vAlbums[singer]) {
                vSong = vSong.concat(album.song)
            }
        }
        return vSong;
    }

    // get random number
    function getRandomInt (min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    }
    function getTopSongNum(min, max, array) {
        let iNum = getRandomInt(min, max);
        if(array.indexOf(iNum) == -1){
            return iNum;
        }else{
            return getTopSongNum(min, max, array);
        }
    }

    // get random array
    function getgetTopSongArray(){
        let iMin = 0;
        let iMax = vSong.length - 1;
        const vTopSongNum = [];
        let len = iTop > vSong.length ? vSong.length : iTop;
        for(let i = 0; i <= len; i++){
            vTopSongNum.push(getTopSongNum(iMin, iMax, vTopSongNum));
        }
        return vTopSongNum;
    }

    return <Article>
        <ViceTitle>Top Songs</ViceTitle>
        <ul>
            {
                vTopSongNum.map( idx =>(
                    <li key={idx}>{vSong[idx].name}</li>
                ))
            }
        </ul>
    </Article>
}