import { createCar } from './car-api';
import { renderCar } from './html-render';

export const renderPanel = () => `
    <div class="control-panel">
                <div class="forms">
                    <form class="form" id="create">
                        <input class="input" id="create-name" name="name" type="text" />
                        <input class="color" id="create-color" name="color" type="color" value="#FAFAD2" />
                        <button class="btn-create" type="submit">Create</button>
                    </form>
                    <form class="form" id="update">
                        <input class="input" id="create-name" name="name" type="text" />
                        <input class="color" id="update-color" name="color" type="color" value="#BC8F8F" />
                        <button class="btn-create btn-update" type="submit">Update</button>
                    </form>
                </div>
                <div class="race-buttons">
                    <button class="btn-race">Race</button>
                    <button class="btn-reset">Reset</button>
                    <button class="btn-generate">Generate cars</button>
                </div>
            </div>
`;

const createControlPanel = () => {
    const createCarForm = document.getElementById('create');
    createCarForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameCar = document.querySelector<HTMLInputElement>('.input')?.value;
        const colorCar = document.querySelector<HTMLInputElement>('.color')?.value;
        const containerCar = document.querySelector('.garage-container');

        if (nameCar && colorCar) {
            const newCar = {
                color: `${colorCar}`,
                name: `${nameCar}`,
            };
            const createdCar = await createCar(newCar);
            const element = document.createElement('div');
            element.innerHTML = renderCar(createdCar);
            containerCar?.appendChild(element);
        }
    });
};

export default createControlPanel;
