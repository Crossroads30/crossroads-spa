import ElementCreator from '../../../../util/element-creator';
import SongView from '../songs/songs-list-view';
import './song-text.css';

const CssClasses = {
    CONTAINER: 'card',
    CONTAINER_FULL: 'card__full',
    FIELD: 'card__field',
    BUTTON: 'back__button',
};
const BUTTON_BACK_TEXT = 'Назад...';

export default class SongTextView extends SongView {
    /**
     * @override
     */
    configureView() {
        this.viewElementCreator.setCssClasses([CssClasses.CONTAINER_FULL]);

        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        let labelParams = {
            tag: 'div',
            classNames: [CssClasses.FIELD],
            textContent: '',
            callback: null,
        };
        let creatorLabel = new ElementCreator(labelParams);
        this.viewElementCreator.addInnerElement(creatorLabel);

        const buttonParams = {
            tag: 'button',
            classNames: [CssClasses.BUTTON],
            textContent: BUTTON_BACK_TEXT,
            callback: this.clickHandler.bind(this),
        };
        const creatorButton = new ElementCreator(buttonParams);
        this.viewElementCreator.addInnerElement(creatorButton);
        this.viewElementCreator.element.classList.remove('card__full');
        this.viewElementCreator.element.classList.add('song__full');


    }
}
