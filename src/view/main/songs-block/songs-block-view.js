import View from '../../view';
import SongTextView from './song-text-window/song-text-window';
import './songs-block.css';
import SongView from './songs/songs-list-view';
import songsInfo from '../../../data/songs/songs-list';

const CssClasses = {
    CONTEINER: 'songs-list',
    HEADER: 'list-header',
};

export default class SongsBlock extends View {
    constructor() {
        /**
         * @type {import('../../view').ViewParams}
         */
        const params = {
            tag: 'ul',
            classNames: [CssClasses.CONTEINER],
            // callback: Function,
        };
        super(params);
        this.showAllSongs();
    }

    /**
     * @param {import('../../../data/songs/songs-list').SongInfo} song
     * @returns {SongView}
     */
    createSongsListToView(song) {
        const songComponent = new SongView(song);
        const callbackMoreInfo = () => this.showSongText(song);
        songComponent.setCallback(callbackMoreInfo);
        return songComponent;
    }

    /**
     * @param {import('../../../data/songs/songs-list').SongInfo} song
     * @returns {SongView}
     */
    createSongTextToView(song) {
        const SongTextComponent = new SongTextView(song);
        const callbackToSongs = () => this.showAllSongs();
        SongTextComponent.setCallback(callbackToSongs);
        return SongTextComponent;
    }

    showAllSongs() {
        this.clearView();

        songsInfo.forEach((song) => {
            const songComponent = this.createSongsListToView(song);
            this.viewElementCreator.addInnerElement(songComponent.getHtmlElement());
        });
        this.viewElementCreator.element.firstChild.innerHTML = '<p>НАЗВАНИЕ</p><p>АЛЬБОМ / ДАТА РЕЛИЗА</p>';
        this.viewElementCreator.element.firstChild.classList.add('list-header');
        this.viewElementCreator.element.firstChild.classList.remove('song');
    }

    showSongText(song) {
        this.clearView();
        const songText = this.createSongTextToView(song);
        this.viewElementCreator.addInnerElement(songText.getHtmlElement());  
    }

    clearView() {
        const htmlElement = this.viewElementCreator.getElement();
        while (htmlElement.firstElementChild) {
            htmlElement.firstElementChild.remove();
        }
    }
}
