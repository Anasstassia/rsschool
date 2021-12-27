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
            newToy.querySelector('img')?.setAttribute('draggable', 'true');
            newToy.querySelector('img')?.setAttribute('id', String(i));

            container?.append(newToy);
        });
        template?.remove();
        const draggable = document.querySelectorAll<HTMLElement>('[draggable]');
        const targets = document.querySelectorAll<HTMLElement>('[data-drop-target]');

        for (let i = 0; i < draggable.length; i++) {
            draggable[i].addEventListener('dragstart', handleDragStart);
        }

        for (let i = 0; i < targets.length; i++) {
            targets[i].addEventListener('dragover', handleOverDrop);
            targets[i].addEventListener('drop', handleOverDrop);
            targets[i].addEventListener('dragenter', handleDragEnterLeave);
            targets[i].addEventListener('dragleave', handleDragEnterLeave);
        }
    }
};
function handleDragStart(e: DragEvent) {
    console.log(e.target);
    e.dataTransfer?.setData('text', (e.target as HTMLElement).id);
}

function handleDragEnterLeave(e: DragEvent) {
    if (e.type == 'dragenter') {
        (e.target as HTMLElement).className = 'drag-enter';
    } else {
        (e.target as HTMLElement).className = '';
    }
}

function handleOverDrop(e: DragEvent) {
    e.preventDefault();

    if (e.type != 'drop') {
        return;
    }
    const draggedId = e.dataTransfer?.getData('text');
    const draggedEl = document.getElementById(draggedId || '');
    console.log(draggedEl, draggedId);
    if (draggedEl?.parentNode == e.target) {
        (e.target as HTMLElement).className = '';
        return;
    }
    if (draggedEl) {
        draggedEl?.parentNode?.removeChild(draggedEl);
        draggedEl.style.width = '55px';
        draggedEl.style.height = '55px';
        if ((e.target as HTMLElement)?.parentElement) {
            (e.target as HTMLElement)?.parentElement?.appendChild(draggedEl);
            // (e.target as HTMLElement)?.parentElement?.className = '';
        }
    }
}
