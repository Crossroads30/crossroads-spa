import './news.css'

import View from '../../view';
import ElementCreator from '../../../util/element-creator';

const CssClasses = {
    NEWS_BLOCK: 'news-block',
    TEXT: 'news-block__text',
};

const TEXT = 'Лучшие новости - это отсутствие новостей!'

export default class NewsView extends View {
    constructor() {
        /**
         * @type {import('../../view').ViewParam}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.NEWS_BLOCK],
        };
        super(params);
        this.configureView();
    }
    configureView() {
        /**
         * @type {import('../../../util/element-creator').ElementParams}
         */
        const textParams = {
            tag:'p',
            classNames: [CssClasses.TEXT],
            textContent: TEXT,
            callback: null,
        }
        const textCreator = new ElementCreator(textParams);
        this.viewElementCreator.addInnerElement(textCreator);
    }
}