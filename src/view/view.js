import ElementCreator from "../util/element-creator";

/**
 * @typedef {{
 * tag: string,
 * classNames: Array<string>,
 * }} ViewParams
 */

export default class View {
    /**
     * @param {ViewParams} params
     */
    constructor(params = { tag: 'section', classNames: [] }) {
        this.viewElementCreator = this.createView(params);
    }
    /**
     * @returns {HTMLElement}
     */
    getHtmlElement() {
        return this.viewElementCreator.getElement();
    }

    /**
     *@param {ViewParams} params
     *@returns {ElementCreator}
     */
    createView(params) {
        /**
         * @type {import('../util/ElementCreator').ElementParams}
         */
        const elementParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: '',
            callback: null,
        };
        this.viewElementCreator = new ElementCreator(elementParams);

        return this.viewElementCreator;
    }
}
