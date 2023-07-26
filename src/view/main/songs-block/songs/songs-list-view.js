import './songs-list.css';
import View from '../../../view';
import ElementCreator from '../../../../util/element-creator';

const CssClasses = {
    CONTAINER: 'song',
    TITLE: 'song__info',
    ALBUM: 'song__album',
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
            callback: Function,
        };
        super(params);

        this.song = song;
        this.callback = this.clickHandler();
        this.configureView();
    }

    configureView() {
        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        const titleParams = {
            tag: 'p',
            classNames: [CssClasses.TITLE],
            textContent: this.song.name,
            callback: this.clickHandler.bind(this),
        };
        const creatorTitle = new ElementCreator(titleParams);
        this.viewElementCreator.addInnerElement(creatorTitle);

        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        const album_releaseParams = {
            tag: 'p',
            classNames: [CssClasses.ALBUM],
            textContent: this.song.album + ' / ' + this.song.release,
            callback: this.clickHandler.bind(this),
        };
        const creatorAlbum = new ElementCreator(album_releaseParams);
        this.viewElementCreator.addInnerElement(creatorAlbum);
    }

    // /**
    //  * @param {function} callback
    //  */
    // setCallback(callback) {
    //     if (typeof callback === 'function' && this.viewElementCreator.element.className !== 'list-header') {
    //         this.callback = callback;
    //     }
    // }

    // clickHandler() {
    //     this.callback();
    // }

    getSongInfo() {
        return this.song;
    }
}
