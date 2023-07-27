import ElementCreator from '../../../../util/element-creator';
import SongView from '../songs/songs-list-view';
import './song-text.css';

const CssClasses = {
    CONTAINER: 'text__conteiner',
    FIELD: 'text__field',
    TITLE: 'text__title',
    BUTTON: 'back__button',
};
const BUTTON_BACK_TEXT = 'Назад...';

export default class SongTextView extends SongView {
    /**
     * @param {import('../../../../data/songs/songs-list').SongData} song
     */
    configureView() {
        this.viewElementCreator.setCssClasses([CssClasses.CONTAINER]);
        this.viewElementCreator.element.classList.remove('song');
        this.callback = null;
        
        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        let titleTextParams = {
            tag: 'h3',
            classNames: [CssClasses.TITLE],
            textContent: `${this.song.name}`,
            callback: null,
        };
        let creatorSongTitle = new ElementCreator(titleTextParams);
        this.viewElementCreator.addInnerElement(creatorSongTitle);

        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        let songTextParams = {
            tag: 'p',
            classNames: [CssClasses.FIELD],
            textContent: '',
            callback: null,
        };
        let creatorSongText = new ElementCreator(songTextParams);
        this.viewElementCreator.addInnerElement(creatorSongText);
        creatorSongText.element.innerText = `${this.song.text}`;

        const buttonParams = {
            tag: 'button',
            classNames: [CssClasses.BUTTON],
            textContent: BUTTON_BACK_TEXT,
            callback: this.clickHandler.bind(this),
        };
        const creatorButton = new ElementCreator(buttonParams);
        this.viewElementCreator.addInnerElement(creatorButton);
    }
}
