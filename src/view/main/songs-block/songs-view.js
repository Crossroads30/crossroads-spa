import ElementCreator from '../../../util/element-creator';
import View from '../../view';
import './songs.css';

const CssClasses = {
    CONTEINER: 'songs-block',
    SONG: 'song',
}

export default class Songs extends View {
    constructor() {
        /**
         * @type {import('../../view').ViewParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.ABOUT],
        };
        super(params);
        this.configureView();
    }

    configureView() {
        /**
         * @type {import('../../../util/element-creator').ElementParams}
         */
        let text1_Params = {
            tag: 'p',
            classNames: [CssClasses.TEXT],
            textContent: 'TEXT_ONE',
            callback: null,
        };
        const text1_Creator = new ElementCreator(text1_Params);
        this.viewElementCreator.addInnerElement(text1_Creator);

        let text2_Params = {
            tag: 'p',
            classNames: [CssClasses.TEXT],
            textContent: 'TEXT_TWO',
            callback: null,
        };
        const text2_Creator = new ElementCreator(text2_Params);
        this.viewElementCreator.addInnerElement(text2_Creator);

    }
}
