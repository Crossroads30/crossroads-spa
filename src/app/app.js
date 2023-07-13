import '../style.css';
import HeaderView from '../view/header/header-view';

export default class AppView {
    constructor() {
        this.createView();
    }

    createView() {
        const header = new HeaderView();

        document.body.append(header.getHtmlElement(header.configureViwe()));
    }
}
