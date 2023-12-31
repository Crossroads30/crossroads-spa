import './videos.css';
import View from '../../view';
import cardsInfo from '../../../data/cards/cards';
import CardView from './card/card-view';
import CardDetailView from './card-youtube-window/card-youtube-view';

const CssClasses = {
    VIDEOS_BLOCK: 'videos-block',
};

export default class VideosBlock extends View {
    constructor() {
        /**
         * @type {import('../../view').ViewParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.VIDEOS_BLOCK],
            // callback: Function,
        };
        super(params);

        this.showAllCard();
    }

    /**
     * @param {import('../../../../data/cards').CardInfo} card
     * @returns {CardView}
     */
    createSmallCardsToView(card) {
        const smallCardComponent = new CardView(card);
        const callbackMoreInfo = () => this.showLargeCard(card);
        smallCardComponent.setCallback(callbackMoreInfo);
        return smallCardComponent;
    }

    /**
     * @param {import('../../../../data/cards').CardInfo} card
     * @returns {CardView}
     */
    createLargeCardToView(card) {
        const largeCardComponent = new CardDetailView(card);
        const callbackToVideo = () => this.showAllCard();
        largeCardComponent.setCallback(callbackToVideo);
        return largeCardComponent;
    }

    showAllCard() {
        this.clearView();
        cardsInfo.forEach((card) => {
            const smallCardComponent = this.createSmallCardsToView(card);
            this.viewElementCreator.addInnerElement(smallCardComponent.getHtmlElement());
            this.viewElementCreator.element.classList.remove('youtube-window');
        });
    }

    showLargeCard(card) {
        this.clearView();
        const largeCard = this.createLargeCardToView(card);
        this.viewElementCreator.addInnerElement(largeCard.getHtmlElement());
        this.viewElementCreator.element.classList.add('youtube-window');
        largeCard.viewElementCreator.element.classList.remove('card');   
    }

    clearView() {
        const htmlElement = this.viewElementCreator.getElement();
        while (htmlElement.firstElementChild) {
            htmlElement.firstElementChild.remove();
        }
    }
}
