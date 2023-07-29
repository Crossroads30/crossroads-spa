import ElementCreator from '../../../../util/element-creator';
import SongView from '../songs/songs-list-view';
import './song-text.css';

const CssClasses = {
    CONTAINER: 'text__conteiner',
    FIELD: 'text__field',
    TITLE: 'text__title',
    BUTTON: 'back-btn',
    PLAY: 'play-btn',
    PAUSE: 'pause-btn',
};
const BUTTON_BACK_TEXT = 'Назад...';

export default class SongTextView extends SongView {
    /**
     * @param {import('../../../../data/songs/songs-list').SongData} song
     */
    configureView() {
        const myAudio = new Audio();
        myAudio.src = this.song.src;

        this.viewElementCreator.setCssClasses([CssClasses.CONTAINER]);
        this.viewElementCreator.element.classList.remove('song');
        this.callback = null;

        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        const playerParams = {
            tag: 'button',
            classNames: [CssClasses.PLAY],
            textContent: '',
            callback: null,
        };
        const playerCreator = new ElementCreator(playerParams);
        this.viewElementCreator.addInnerElement(playerCreator);

        let isPlay = false;
        playerCreator.element.addEventListener('click', () => {
            if (!isPlay) {
                myAudio.play();
                playerCreator.element.classList.add('pause-btn');
                playerCreator.element.classList.remove('play-btn');
                isPlay = true;
            } else if (isPlay) {
                myAudio.pause();
                playerCreator.element.classList.add('play-btn');
                playerCreator.element.classList.remove('pause-btn');
                isPlay = false;
            }
        });

        let titleTextParams = {
            tag: 'h3',
            classNames: [CssClasses.TITLE],
            textContent: `${this.song.name}`,
            callback: null,
        };
        let creatorSongTitle = new ElementCreator(titleTextParams);
        this.viewElementCreator.addInnerElement(creatorSongTitle);

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
        creatorButton.element.addEventListener('click', () => {
            myAudio.pause();
        });
    }
}
