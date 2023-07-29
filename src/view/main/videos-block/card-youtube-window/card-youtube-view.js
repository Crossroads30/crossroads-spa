import ElementCreator from '../../../../util/element-creator';
import CardView from '../card/card-view';
import './card-youtube.css'

const CssClasses = {
    CONTAINER: 'card',
    CONTAINER_FULL: 'card__full',
    FIELD: 'card__field',
    BUTTON: 'back-btn',
};
const CARD_TEXT_BACK = 'Назад...';

export default class CardDetailView extends CardView {
    /**
     * @override
     */
    configureView() {
        this.viewElementCreator.setCssClasses([CssClasses.CONTAINER_FULL]);

        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        let windowParams = {
            tag: 'div',
            classNames: [CssClasses.FIELD],
            textContent: '',
            callback: null,
        };
        let creatorWindow = new ElementCreator(windowParams);
        this.viewElementCreator.addInnerElement(creatorWindow);

        creatorWindow.element.innerHTML = `<iframe src="${this.card.youtubeUrl}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

        const buttonParams = {
            tag: 'button',
            classNames: [CssClasses.BUTTON],
            textContent: CARD_TEXT_BACK,
            callback: this.buttonClickHandler.bind(this),
        };
        const creatorButton = new ElementCreator(buttonParams);
        this.viewElementCreator.addInnerElement(creatorButton);
    }

    
}