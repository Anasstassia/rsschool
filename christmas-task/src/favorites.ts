import ToysList from './toys-list';
import { IToy, data as DATA } from '../data';

const container = document.querySelector<HTMLElement>('.select-toys-container');
const template = document.querySelector<HTMLElement>('.template-toy-sel');
const toyImg = template?.querySelector<HTMLImageElement>('.toy-img');

export const drawToys = (toys: ToysList) => {
    if (container && template) {
        container.innerHTML = '';
    }
    if (DATA.some((el) => el.selected === true)) {
        DATA.forEach((el, i) => {
            if (el.selected) {
                const newToy = template?.cloneNode(true) as HTMLElement;
                if (toyImg) {
                    toyImg.src = `/assets/toys/${el.num}.png`;
                }
                const count = newToy.querySelector('.counter');
                if (count) {
                    count.textContent = `${el.count}`;
                }
                newToy.setAttribute('draggable', 'true');
                newToy.setAttribute('id', 'i');
                container?.append(newToy);
            }
            template?.remove();
        });
    } else {
        const firstTwentyToys = DATA.slice(0, 20);
        firstTwentyToys.forEach((el, i) => {
            const newToy = template?.cloneNode(true) as HTMLElement;
            if (toyImg) {
                toyImg.src = `/assets/toys/${el.num}.png`;
            }
            const count = newToy.querySelector('.counter');
            if (count) {
                count.textContent = `${el.count}`;
            }
            newToy.setAttribute('draggable', 'true');
            newToy.setAttribute('id', 'i');
            container?.append(newToy);

            template?.remove();
        });
    }
};
