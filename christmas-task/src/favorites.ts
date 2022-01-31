import { TOYS as DATA } from '../data';

const container = document.querySelector<HTMLElement>('.select-toys-container');
const template = document.querySelector<HTMLElement>('.template-toy-sel');

function handleDragStart(e: DragEvent) {
    e.dataTransfer?.setData('text', (e.target as HTMLElement).id);
}

function handleDragEnterLeave(e: DragEvent) {
    if (e.type === 'dragenter') {
        (e.target as HTMLElement).className = 'drag-enter';
    } else {
        (e.target as HTMLElement).className = '';
    }
}

function handleOverDrop(e: DragEvent) {
    e.preventDefault();

    if (e.type !== 'drop') {
        return;
    }
    const draggedId = e.dataTransfer?.getData('text');
    const draggedEl = document.getElementById(draggedId || '');
    if (draggedEl?.parentNode === e.target) {
        (e.target as HTMLElement).className = '';
        return;
    }
    if (draggedEl) {
        draggedEl.style.width = '55px';
        draggedEl.style.height = '55px';
        draggedEl.style.position = 'absolute';
        draggedEl.style.left = `${e?.pageX}px`;
        draggedEl.style.top = `${e?.pageY}px`;
        draggedEl.style.zIndex = '1000';
        if ((e.target as HTMLElement)?.parentElement) {
            (e.target as HTMLElement)?.parentElement?.appendChild(draggedEl);
        }
    }
}

export const drawToys = () => {
    if (container && template) {
        container.innerHTML = '';
    }
    if (DATA.some((el) => el.selected)) {
        DATA.forEach((el, i) => {
            if (el.selected) {
                const newToy = template?.cloneNode(true) as HTMLElement;
                const toyImg = newToy.querySelector('img');
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
            }
        });
        template?.remove();

        const draggable = document.querySelectorAll<HTMLElement>('[draggable]');
        const targets = document.querySelectorAll<HTMLElement>('[data-drop-target]');

        draggable.forEach((el) => {
            el.addEventListener('dragstart', handleDragStart);
        });

        targets.forEach((target) => {
            target.addEventListener('dragover', handleOverDrop);
            target.addEventListener('drop', handleOverDrop);
            target.addEventListener('dragenter', handleDragEnterLeave);
            target.addEventListener('dragleave', handleDragEnterLeave);
        });
    } else {
        const firstTwentyToys = DATA.slice(0, 20);
        firstTwentyToys.forEach((el, i) => {
            const newToy = template?.cloneNode(true) as HTMLElement;
            const toyImg = newToy.querySelector('img');

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

        draggable.forEach((el) => {
            el.addEventListener('dragstart', handleDragStart);
        });

        targets.forEach((target) => {
            target.addEventListener('dragover', handleOverDrop);
            target.addEventListener('drop', handleOverDrop);
            target.addEventListener('dragenter', handleDragEnterLeave);
            target.addEventListener('dragleave', handleDragEnterLeave);
        });
    }
};
