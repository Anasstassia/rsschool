import './sources.css';

class Sources {
    draw(data: { name: string; id: string }[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
        const defaultItem: HTMLElement = document.querySelector('[data-source-id="bbc-news"].source__item');
        defaultItem.classList.add('active');
        defaultItem?.click();
        this.selectActiveSource();
    }

    selectActiveSource = () => {
        document.querySelectorAll('.sources .source__item').forEach((e) =>
            e.addEventListener('click', () => {
                const currentActive = document.querySelector('.sources .active');
                currentActive.classList.remove('active');
                e.classList.add('active');
            })
        );
    };
}

export default Sources;
