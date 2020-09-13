import { createContext } from 'react'

const sImgUrl = '/img/';
const sMusicUrl = '/music/';

const vAlbums =  {
    'Richard Green':[
        {
            'name': 'But I Must Explain To You (Deluxe)',
            'albumImg': sImgUrl + 'henrik-donnestad-V6Qd6zA85ck-unsplash.jpg',
            'year': '2019',
            'month': '7',
            'day': '15',
            'song': 
            [
                {
                    'name': 'Adventure',
                    'url': sMusicUrl+'bensound-adventure.mp3',
                    'time': '3:07'
                },
                {
                    'name': 'A New Beginning',
                    'url': sMusicUrl+'bensound-anewbeginning.mp3',
                    'time': '2:35'
                },
                {
                    'name': 'Birth Of A Hero',
                    'url': sMusicUrl+'bensound-birthofahero.mp3',
                    'time': '3:49'
                },
                {
                    'name': 'Better Days',
                    'url': sMusicUrl+'bensound-betterdays.mp3',
                    'time': '2:34'
                },
                {
                    'name': 'New Dawn',
                    'url': sMusicUrl+'bensound-newdawn.mp3',
                    'time': '5:13'
                },
                {
                    'name': 'Of Elias Dream',
                    'url': sMusicUrl+'bensound-ofeliasdream.mp3',
                    'time': '4:59'
                },
                {
                    'name': 'Once Again',
                    'url': sMusicUrl+'bensound-onceagain.mp3',
                    'time': '3:52'
                }
            ], 
        },
        {
            'name': 'itself',
            'albumImg': sImgUrl + 'bangkit-ristant-cuIwZaJAFS8-unsplash.jpg',
            'year': '2018',
            'month': '7',
            'day': '15',
            'song' :
            [
                {
                    'name': 'New Dawn',
                    'url': sMusicUrl+'bensound-newdawn.mp3',
                    'time': '5:13'
                },
                {
                    'name': 'Of Elias Dream',
                    'url': sMusicUrl+'bensound-ofeliasdream.mp3',
                    'time': '4:59'
                },
                {
                    'name': 'Once Again',
                    'url': sMusicUrl+'bensound-onceagain.mp3',
                    'time': '3:52'
                }
            ],
        },
        {
            'name': 'Solo',
            'albumImg': sImgUrl + 'noah-silliman-gzhyKEo_cbU-unsplash.jpg',
            'year': '2017',
            'month': '7',
            'day': '15',
            'song':
            [
                {
                    'name': 'Piano Moment',
                    'url': sMusicUrl+'bensound-pianomoment.mp3',
                    'time': '1:05'
                },
                {
                    'name': 'Slow Motion',
                    'url': sMusicUrl+'bensound-slowmotion.mp3',
                    'time': '3:27'
                },
                {
                    'name': 'Summer',
                    'url': sMusicUrl+'bensound-summer.mp3',
                    'time': '3:37'
                },
                {
                    'name': 'New Dawn',
                    'url': sMusicUrl+'bensound-newdawn.mp3',
                    'time': '5:13'
                },
                {
                    'name': 'Of Elias Dream',
                    'url': sMusicUrl+'bensound-ofeliasdream.mp3',
                    'time': '4:59'
                },
                {
                    'name': 'Once Again',
                    'url': sMusicUrl+'bensound-onceagain.mp3',
                    'time': '3:52'
                }
            ],
        },
        {
            'name': 'Happiness',
            'albumImg': sImgUrl + 'piron-guillaume-NM77255WWVA-unsplash.jpg',
            'year': '2015',
            'month': '7',
            'day': '15',
            'song': 
            [
                {
                    'name': 'Tenderness',
                    'url': sMusicUrl+'bensound-tenderness.mp3',
                    'time': '2:04'
                },
                {
                    'name': 'Tomorrow',
                    'url': sMusicUrl+'bensound-tomorrow.mp3',
                    'time': '4:55'
                },
                {
                    'name': 'Enigmatic',
                    'url': sMusicUrl+'bensound-enigmatic.mp3',
                    'time': '2:27'
                }
            ],
        },
        {
            'name': 'No More Excuses',
            'albumImg': sImgUrl + 'steve-johnson-IykhuSC5jgw-unsplash.jpg',
            'year': '2013',
            'month': '7',
            'day': '15',
            'song':
            [
                {
                    'name': 'Piano Moment',
                    'url': sMusicUrl+'bensound-pianomoment.mp3',
                    'time': '1:05'
                },
                {
                    'name': 'Slow Motion',
                    'url': sMusicUrl+'bensound-slowmotion.mp3',
                    'time': '3:27'
                },
                {
                    'name': 'Summer',
                    'url': sMusicUrl+'bensound-summer.mp3',
                    'time': '3:37'
                }
            ]
        },
    ]
};

const vSinger =[
    {
        'singerImg': sImgUrl + 'richard-jaimes-jI5lCCGprgM-unsplash.jpg',
        'singerName': 'Richard Green',
        'followers': 5790
    },
    {
        'singerImg': sImgUrl + 'jakob-owens-lkMJcGDZLVs-unsplash.jpg',
        'singerName': 'Mountain John',
        'followers': 5990
    },
    {
        'singerImg': sImgUrl + 'taras-chernus-SazOmY5p0AQ-unsplash.jpg',
        'singerName': 'Huston 1990',
        'followers': 4590
    },
    {
        'singerImg': sImgUrl + 'ryan-holloway-P2FNYWOlgZs-unsplash.jpg',
        'singerName': 'BLAST',
        'followers': 3800
    }
];

const vPageType = [ 'Singer', 'Ablum' ]

export { vAlbums, vSinger, vPageType };

const MusicContext = createContext({
    iSinger: 0
});
 
export const { Provider, Consumer } = MusicContext;
// default
export default MusicContext;
