import './card.css';
import View from '../../../view';
import ElementCreator from '../../../../util/element-creator';

const CssClasses = {
    CONTAINER: 'card',
    IMG: 'card__image',
    TITLE: 'card__title',
};

export default class CardView extends View {
    /**
     * @param {import('../../../../data/cards/cards').CardView} card
     */
    constructor(card) {
        /**
         * @type {import('../../../view').ViewParams}
         */

        const params = {
            tag: 'a',
            classNames: [CssClasses.CONTAINER],
            callback: Function,
        };
        super(params);

        this.callback;
        this.card = card;

        this.configureView();
    }

    configureView() {
        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        const imgParams = {
            tag: 'img',
            classNames: [CssClasses.IMG],
            textContent: '',
            callback: this.buttonClickHandler.bind(this),
        };
        const creatorSongLink = new ElementCreator(imgParams);
        this.viewElementCreator.addInnerElement(creatorSongLink);
        creatorSongLink.element.setAttribute('src', `${this.card.url}`);
        
        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        const titleParams = {
            tag: 'p',
            classNames: [CssClasses.TITLE],
            textContent: this.card.name,
            callback: this.buttonClickHandler.bind(this),
        };
        const creatorTitle = new ElementCreator(titleParams);
        this.viewElementCreator.addInnerElement(creatorTitle);
    }

    /**
     * @param {function} callback
     */
    setCallback(callback) {
        if (typeof callback === 'function') {
            this.callback = callback;
        }
    }

    buttonClickHandler() {
        this.callback();
    }

    getCardInfo() {
        return this.card;
    }
}
