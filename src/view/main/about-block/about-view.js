import './about.css';
import View from '../../view';
import ElementCreator from '../../../util/element-creator';

const CssClasses = {
    ABOUT: 'about',
    TEXT: 'text',
};

const TEXT_ONE =
    'Перекрёсток, иными словами перепутье - это своего рода граница между двумя мирами, места пересечения сил четырёх сторон света. Это тонкая граница, поэтому перекрёстки используют в различных магических ритуалаx.\n \nСуществует поверье, что если пройтись по перекрёстку трижды и загадать при этом желание, то оно сбудется.\n \nТакже перекресток - это своего рода "выбор" в каком направлении двигаться дальше - прямо, свернуть, а может стоит повернуть назад? Нам всем приходиться делать этот выбор, идя по своему жизненному пути, практически ежедневно.\n \nНаписание музыки - это тоже своего рода  "перекресток" на котором ты делаешь выбор в каком направлении двигаться, выбирая сюжет, стиль и жанр. И вот когда ты понимаешь, что идешь в нужном направлении, в конце пути тебя ожидает непревзойденная эйфория от своего маленького музыкального мира ,что ты создал. В этом и есть настоящая магия!';

const TEXT_TWO =
    'Всех приветствую! Данный проект является результатам моих творческих изысканий за последние 20 лет, я являюсь автором музыки и текстов, а так же монтажа всех видеороликов представленных здесь.На данном этапе все музыкальные композиции представленные на этом сайте являются прототипами того, что может быть реализовано в будущем. \n\n\nАвтор проека - Яков Заболотный';


export default class AboutView extends View {
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
            textContent: TEXT_ONE,
            callback: null,
        };
        const text1_Creator = new ElementCreator(text1_Params);
        this.viewElementCreator.addInnerElement(text1_Creator);

        let text2_Params = {
            tag: 'p',
            classNames: [CssClasses.TEXT],
            textContent: TEXT_TWO,
            callback: null,
        };
        const text2_Creator = new ElementCreator(text2_Params);
        this.viewElementCreator.addInnerElement(text2_Creator);

    }
}
