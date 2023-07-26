import './header.css';
import View from '../view';
import VideoView from '../main/videos-block/videos-view';
import ElementCreator from '../../util/element-creator';
import LinkView from './link-view/link-view';
import AboutView from '../main/about-block/about-view';
import Songs from '../main/songs-block/songs-block-view';

const CssClasses = {
    HEADER: 'header',
    NAV: 'nav',
    TITLE: 'title',
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
    /**
     * @param {import('../main/main-view').default} mainComponent
     */
    constructor(mainComponent) {
        /**
         * @type {import('../view').ViewParams}
         */
        const params = {
            tag: 'header',
            classNames: [CssClasses.HEADER],
            callback: Function,
        };
        super(params);
        this.headerLinkElements = [];
        this.configureView(mainComponent);
    }

    /**
     * @param {import('../main/main-view').default} mainComponent
     */
    configureView(mainComponent) {
        /**
         * @type {import('../../util/element-creator').ElementParams}
         */
        const navParams = {
            tag: 'nav',
            classNames: [CssClasses.NAV],
            textContent: '',
            callback: null,
        };
        /**
         * @type {import('../../util/element-creator').ElementParams}
         */
        const titleParams = {
            tag: 'h1',
            classNames: [CssClasses.TITLE],
            textContent: 'ПЕРЕКРЁСТОК',
            callback: null,
        };

        const creatorNav = new ElementCreator(navParams);
        this.viewElementCreator.addInnerElement(creatorNav);

        const creatorTitle = new ElementCreator(titleParams);
        this.viewElementCreator.addInnerElement(creatorTitle);


        const pages = this.getPages(mainComponent);

        pages.forEach((page, index) => {
            const linkElement = new LinkView(page, this.headerLinkElements);
            creatorNav.addInnerElement(linkElement.getHtmlElement());
            
            if (index === START_PAGE_INDEX) {
                page.callback();
                linkElement.setSelectedStatus();
            }

            this.headerLinkElements.push(linkElement);
        });

        this.viewElementCreator.addInnerElement(creatorNav);
    }

    /**
     * @param {import('../main/main-view').default} mainComponent
     * @returns {Array<Page>}
     */
    getPages(mainComponent) {
        // const aboutView = new AboutView();
        // const videoView = new VideoView();
        const songViwe = new Songs();

        const pages = [
            // {
            //     name: NamePages.ABOUT,
            //     callback: () => mainComponent.setContent(aboutView),
            // },
            // {
            //     name: NamePages.VIDEOS,
            //     callback: () => mainComponent.setContent(videoView),
            // },
            {
                name: NamePages.SONGS,
                callback: () => mainComponent.setContent(songViwe),
            },
            {
                name: NamePages.ALBUMS,
            },
            {
                name: NamePages.NEWS,
            },
        ];

        return pages;
    }
}
