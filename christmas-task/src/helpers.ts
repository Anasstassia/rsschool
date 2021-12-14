import ToysList from './toys-list';
const toys = new ToysList();

export const selected = () => {
    const select = document.querySelector<HTMLSelectElement>('.select');

    if (select) {
        select.addEventListener('change', () => {
            switch (select.options.selectedIndex) {
                case 0:
                    break;
                case 1:
                    toys.sort(0);
                    break;
                case 2:
                    toys.sort(1);
                    break;
                case 3:
                    toys.sort(2);
                    break;
                case 4:
                    toys.sort(3);
                    break;
                default:
                    break;
            }

            // if (select.options.selectedIndex === 1) {
            //     sort(0);
            // }
        });
    }
};
