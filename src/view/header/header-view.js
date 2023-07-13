import './header.css';
import View from '../view';
import ElementCreator from '../../util/element-creator';
import LinkView from './link-view/link-view';

const CssClasses = {
    HEADER: 'header',
    TITLE: 'header-title',
    NAV: 'nav',
};

const NamePages = {
    ABOUT: 'главная',
    VIDEOS: 'видео',
    SONGS: 'песни',
    ALBUMS: 'альбомы',
    NEWS: 'новости',
};

const START_PAGE_INDEX = 0;

/**
 * @typedef {{ name: string, callback: function }} Page
 */

export default class HeaderView extends View {
    constructor() {
        /**
         * @param {import('../../../view').ViewParams}
         */
        const params = {
            tag: 'header',
            classNames: [CssClasses.HEADER],
        };
        super(params);
    }

    /**
     * @param {import('../main/main-view').default} mainComponent
     */

    configureViwe(mainComponent) {
        /**
         * @type {import('../../util/element-creator').ElementParams}
         */
        const titleParams = {
            tag: 'h1',
            classNames: [CssClasses.TITLE],
            textContent: 'ПЕРЕКРЕСТОК',
            callback: null,
        };
        const navParams = {
            tag: 'nav',
            classNames: [CssClasses.NAV],
            callback: null,
        };
        const creatorNav = new ElementCreator(navParams);
        const creatorTitle = new ElementCreator(titleParams);
        this.viewElementCreator.addInnerElement(creatorTitle);
        this.viewElementCreator.addInnerElement(creatorNav);

        // const pages = this.getPages(mainComponent);

        // pages.forEach((page, index) => {
        //     const linkElement = new LinkView(page, this.headerLinkElements);

        //     creatorNav.addInnerElement(linkElement.getHtmlElement());
        //     if (index === START_PAGE_INDEX) {
        //         page.callback();
        //         linkElement.setSelectedStatus();
        //     }

        //     this.headerLinkElements.push(linkElement);
        // });

        this.viewElementCreator.addInnerElement(creatorNav);
    }
    // /**
    //  * @param {import('../main/main-view').default} mainComponent
    //  * @returns {Array<Page>}
    //  */
    // getPages(mainComponent) {
    //     const about = new About;
    // }
}
