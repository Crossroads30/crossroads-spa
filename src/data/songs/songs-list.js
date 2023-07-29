import song_text from './songs-text';
import сhristmas from './sounds/сhristmas.mp3';
import caravan from './sounds/Караван_мечты.mp3';
import man_on_moon from './sounds/Человек_на_Луне.mp3';
import crossroads from './sounds/Перекрёсток.mp3';
import ocean from './sounds/Океан.mp3';
import lulaby from './sounds/Колыбельная.mp3';
import express from './sounds/Межпланетный_экспресс.mp3';
import universe from './sounds/Под_звёздами_вселенной.mp3';
import kitchen from './sounds/Кухня_любви.mp3';
import summer from './sounds/Когда_закончится_лето.mp3';
import dream from './sounds/Сон_Алеси.mp3';
import still_love_you from './sounds/Я_всё_ещё_люблю_тебя.mp3';
import dolls from './sounds/Люди_как_куклы.mp3';
import snow_on_town from './sounds/На_старый_город_падает_снег.mp3';
import king from './sounds/Солнечный_Король.mp3';
import hotel from './sounds/Отель_разбитых_сердец.mp3';
import reincarnation from './sounds/Перерождение.mp3';
// import waltz from './sounds/Звёздный_вальс.mp3';
 
/**
 * @typedef {{id: string, name: string, album: string, release: string, text: string, src: string}} SongData
 */
const songsView = [
    {
        id: '0',
        name: '',
        album: '',
        release: '', 
        text: '',     
    },
    {
        id: '1',
        name: 'Наконец-то Рождество!',
        album: 'Перекрёсток',
        release: '20/12/2021', 
        text: song_text[0].text,
        src: `${сhristmas}`,       
    },
    {
        id: '2',
        name: 'Человек на луне',
        album: 'Перекрёсток',
        release: '01/01/2022',
        text: song_text[1].text,
        src: `${man_on_moon}`,         
    },
    {
        id: '3',
        name: 'Перекрёсток',
        album: 'Перекрёсток',
        release: '18/02/2022',
        text: song_text[2].text,
        src: `${crossroads}`,        
    },
    {
        id: '4',
        name: 'Океан',
        album: 'Перекрёсток',
        release: '09/02/2022', 
        text: song_text[3].text,
        src: `${ocean}`,       
    },
    {
        id: '5',
        name: 'Колыбельная',
        album: 'Перекрёсток',
        release: '14/03/2022',
        text: song_text[4].text,
        src: `${lulaby}`,        
    },
    {
        id: '6',
        name: 'Межпланетный экспресс',
        album: 'Перекрёсток',
        release: '08/04/2022',
        text: song_text[5].text,
        src: `${express}`,        
    },
    {
        id: '7',
        name: 'Под звёздами вселенной',
        album: 'Перекрёсток',
        release: '06/05/2022',
        text: song_text[6].text,
        src: `${universe}`,        
    },
    {
        id: '8',
        name: 'Кухня любви',
        album: 'Перекрёсток',
        release: '31/05/2022',
        text: song_text[7].text,
        src: `${kitchen}`,        
    },
    {
        id: '9',
        name: 'Когда закончится лето',
        album: 'Перекрёсток',
        release: '26/08/2022',
        text: song_text[8].text,
        src: `${summer}`,        
    },
    {
        id: '10',
        name: 'Сон Алеси',
        album: 'Перекрёсток',
        release: '22/09/2022',
        text: song_text[9].text,
        src: `${dream}`,       
    },
    {
        id: '11',
        name: 'Я всё ещё люблю тебя',
        album: '........',
        release: '........', 
        text: song_text[10].text,
        src: `${still_love_you}`,       
    },
    {
        id: '12',
        name: 'Люди как куклы',
        album: '........',
        release: '........', 
        text: song_text[11].text,
        src: `${dolls}`,       
    },
    {
        id: '13',
        name: 'Солнечный Король',
        album: '........',
        release: '........',
        text: song_text[12].text,
        src: `${king}`,        
    },
    {
        id: '14',
        name: 'Отель разбитых сердец',
        album: '........',
        release: '........',
        text: song_text[13].text,
        src: `${hotel}`,        
    },
    {
        id: '15',
        name: 'Караван мечты',
        album: '........',
        release: '........', 
        text: song_text[14].text,
        src: `${caravan}`,       
    },
    {
        id: '16',
        name: 'На старый город падает снег...',
        album: '........',
        release: '........', 
        text: song_text[15].text,
        src: `${snow_on_town}`,       
    },
    {
        id: '17',
        name: 'Звёздный вальс',
        album: '........',
        release: '........', 
        text: song_text[16].text,
        src: ``,       
    },
    {
        id: '18',
        name: 'Перерождение',
        album: '........',
        release: '........', 
        text: song_text[17].text,
        src: `${reincarnation}`,       
    },
];

export default songsView;
