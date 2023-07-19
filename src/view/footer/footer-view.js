import './footer.css';
import View from '../view';

const CssClasses = {
    FOOTER: 'footer',
};
const TEXT1 = '<p>COPYRIGHT © PERECRESTOKMUSIC 2023</p>';
const TEXT2 = '<a href="https://www.youtube.com/@user-sr2nv1yl6h/featured">ME ON YOUTUBE</a>'

export default class FooterView extends View {
    constructor() {
        /**
         * @type {import('../view').ViewParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.FOOTER],
        };
        super(params);
        this.configureView();
    }

    configureView() {
        // this.viewElementCreator.setTextContent(`${TEXT1}${TEXT2}`);
        this.viewElementCreator.element.innerHTML = `${TEXT1}${TEXT2}`;
    }
}
