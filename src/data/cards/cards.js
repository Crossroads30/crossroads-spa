import ocean from '../backgrounds/ocean.png';
import deram from '../backgrounds/alesya_dream.png';
import summer from '../backgrounds/summer_almost_gone.png';
import moon from '../backgrounds/man_on_a_moon.png';
import kitchen from '../backgrounds/love_kitchen.png';
import universe from '../backgrounds/under_the_stars.png';
import express from '../backgrounds/space_express.png';
import lulaby from '../backgrounds/lulaby.png';
import crossroads from '../backgrounds/crossroads.png';
import сhristmas from '../backgrounds/сhristmas.png';

/**
 * @typedef {{id: string, name: string, url: string, youtubeUrl: string }} CardView
 */
const cardsView = [
    {
        id: '1',
        name: 'Океан',
        url: `${ocean}`,
        youtubeUrl: 'https://www.youtube.com/embed/fyMYqtFbAeY',
    },
    {
        id: '2',
        name: 'Сон Алеси',
        url: `${deram}`,
        youtubeUrl: 'https://www.youtube.com/embed/1OPVJT0f_9A',
    },
    {
        id: '3',
        name: 'Лета почти уже нет...',
        url: `${summer}`,
        youtubeUrl: 'https://www.youtube.com/embed/La6CFeCqKZ4',
    },
    {
        id: '4',
        name: 'Человек на луне',
        url: `${moon}`,
        youtubeUrl: 'https://www.youtube.com/embed/xSQXLtW9ka0',
    },
    {
        id: '5',
        name: 'Кухня любви',
        url: `${kitchen}`,
        youtubeUrl: 'https://www.youtube.com/embed/qfiurXrMsFc',
    },
    {
        id: '6',
        name: 'Под звёздами вселенной',
        url: `${universe}`,
        youtubeUrl: 'https://www.youtube.com/embed/cV03oI4MPVU',
    },
    {
        id: '7',
        name: 'Межпланетный экспресс',
        url: `${express}`,
        youtubeUrl: 'https://www.youtube.com/embed/wQF3InkqzQY',
    },
    {
        id: '8',
        name: 'Колыбельная',
        url: `${lulaby}`,
        youtubeUrl: 'https://www.youtube.com/embed/NqpizZjW54U',
    },
    {
        id: '9',
        name: 'Перекрёсток',
        url: `${crossroads}`,
        youtubeUrl: 'https://www.youtube.com/embed/bz01x0xPis4',
    },
    {
        id: '10',
        name: 'Наконец-то Рождество',
        url: `${сhristmas}`,
        youtubeUrl: 'https://www.youtube.com/embed/vw-4y3bPLlw',
    },

];

export default cardsView;
