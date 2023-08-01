import './album-block.css';
import list from'../../../data/albums/albums';
import View from '../../view';
import ElementCreator from '../../../util/element-creator';

const album1Songs = list[0].songsList.join('\n');
const album2Songs = list[1].songsList.join('\n');


const CssClasses = {
    ALBUM_BLOCK: 'album-block',
    ALBUM_1: 'album1-wrapper',
    ALBUM_2: 'album2-wrapper',
    LIST_1: 'album1-songs-list',
    LIST_2: 'album2-songs-list',

};

export default class AlbomView extends View {
    constructor() {
        /**
         * @type {import('../../view').ViewParam}
         */

        const params = {
            tag: 'section',
            classNames: [CssClasses.ALBUM_BLOCK],
        };
        super(params);
        this.configureView();
    }

    configureView() {
        /**
         * @type {import('../../../util/element-creator').ElementParams}
         */
        const albumParams1 = {
            tag: 'div',
            classNames: [CssClasses.ALBUM_1],
            textContent: '',
            callback: null,
        };
        const album1Creator = new ElementCreator(albumParams1);
        this.viewElementCreator.addInnerElement(album1Creator);
        album1Creator.element.innerHTML =
            '<h3 class="cover__title">Перекрёсток</h3><div class="cover1"></div><p class="cover__release">2022</p>';

        const albumParams2 = {
            tag: 'div',
            classNames: [CssClasses.ALBUM_2],
            textContent: '',
            callback: null,
        };
        const album2Creator = new ElementCreator(albumParams2);
        this.viewElementCreator.addInnerElement(album2Creator);
        album2Creator.element.innerHTML =
            '<h3 class="cover__title">Человек на луне</h3><div class="cover2"></div><p class="cover__release">2024</p>';
        console.log(list[0].songsList.join('\n'));

        const list1Params = {
            tag: 'div',
            classNames: [CssClasses.LIST_1],
            textContent: '',
            callback: null,
        };
        const list1Creator = new ElementCreator(list1Params);
        this.viewElementCreator.addInnerElement(list1Creator);

        list1Creator.element.innerHTML = `<p>${album1Songs}</p>`

        album1Creator.element.append(list1Creator.element);

        const list2Params = {
            tag: 'div',
            classNames: [CssClasses.LIST_2],
            textContent: '',
            callback: null,
        };
        const list2Creator = new ElementCreator(list2Params);
        this.viewElementCreator.addInnerElement(list2Creator);

        list2Creator.element.innerHTML = `<p>${album2Songs}</p>`

        album2Creator.element.append(list2Creator.element);
    }
}
