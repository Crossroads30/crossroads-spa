import './songs-list.css';
import View from '../../../view';
import ElementCreator from '../../../../util/element-creator';

const CssClasses = {
    CONTAINER: 'song',
    TITLE: 'song__info',
    ALBUM: 'song__album',
    WRAPPER: 'wrapper',
};

export default class SongView extends View {
    /**
     * @param {import('../../../../data/songs/songs-list').SongData} song
     */
    constructor(song) {
        /**
         * @type {import('../../../view').ViewParams}
         */
        const params = {
            tag: 'li',
            classNames: [CssClasses.CONTAINER],
            // callback: Function,
        };
        super(params);

        this.song = song;
        this.configureView();
    }

    configureView() {
        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        const wrapperParams = {
            tag: 'div',
            classNames: [CssClasses.WRAPPER],
            textContent: '',
            callback: this.clickHandler.bind(this),
        };
        const wrapperCreator = new ElementCreator(wrapperParams);
        this.viewElementCreator.addInnerElement(wrapperCreator);

        const titleParams = {
            tag: 'p',
            classNames: [CssClasses.TITLE],
            textContent: this.song.name,
            callback: null, //this.clickHandler.bind(this),
        };
        const creatorTitle = new ElementCreator(titleParams);
        // this.viewElementCreator.addInnerElement(creatorTitle);

        wrapperCreator.element.append(creatorTitle.element);

        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        const album_releaseParams = {
            tag: 'p',
            classNames: [CssClasses.ALBUM],
            textContent: this.song.album + ' / ' + this.song.release,
            callback: null, //this.clickHandler.bind(this),
        };
        const creatorAlbum = new ElementCreator(album_releaseParams);
        // this.viewElementCreator.addInnerElement(creatorAlbum);

        wrapperCreator.element.append(creatorAlbum.element);
    }

    /**
     * @param {function} callback
     */
    setCallback(callback) {
        if (typeof callback === 'function' && this.viewElementCreator.element.className !== 'list-header') {
            this.callback = callback;
        }
    }

    clickHandler() {
        this.callback();
    }

    getSongInfo() {
        return this.song;
    }
}
