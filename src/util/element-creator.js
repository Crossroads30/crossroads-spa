/**
 * @typedef {{
 * tag: string,
 * classNames: Array<string>,
 * textContent: string,
 * callback: function,
 * }} ElementParams
 */

export default class ElementCreator {
    /**
     * @param {ElementParams} params
     */
    constructor(params) {
        this.element = null;
        this.createElement(params);
        // this.setCallback();
    }

    /**
     * @return {HTMLElement}
     */
    getElement() {
        return this.element;
    }

    /**
     *@param {HTMLElement | ElementCreator} element
     */
    addInnerElement(element) {
        if (element instanceof ElementCreator) {
            this.element.append(element.getElement());
        } else {
            this.element.append(element);
        }
    }

    /**
     * @param {ElementParams} params
     */
    createElement(params) {
        this.element = document.createElement(params.tag);
        this.setCssClasses(params.classNames);
        this.setTextContent(params.textContent);
        this.setCallback(params.callback);
    }

    /**
     * @param {Array<string>} cssClasses
     */
    setCssClasses(cssClasses = []) {
        cssClasses.map((cssClass) => this.element.classList.add(cssClass));
    }

    /**
     * @param {string} text
     */
    setTextContent(text = '') {
        this.element.textContent = text;
    }

    /**
     * @param {function} callback
     */
    setCallback(callback) {
        if (typeof callback === 'function') {
            this.element.addEventListener('click', (event) => callback(event));        }
    }
}
