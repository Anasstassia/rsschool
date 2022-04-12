import { createCar, updateCar } from './car-api';
import { renderMainHtml } from './html-render';
import { setCurrentId, state } from './state';

export const renderPanel = () => `
    <div class="control-panel">
                <div class="forms">
                    <form class="form" id="create">
                        <input class="input" id="create-name" name="name" type="text" />
                        <input class="color" id="create-color" name="color" type="color" value="#FAFAD2" />
                        <button class="btn-create" type="submit">Create</button>
                    </form>
                    <form class="form" id="update">
                        <input class="input" id="update-name" name="name" type="text" />
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

        if (nameCar && colorCar) {
            const newCar = {
                color: `${colorCar}`,
                name: `${nameCar}`,
            };
            await createCar(newCar);
            renderMainHtml();
        }
    });

    const updateCarForm = document.getElementById('update');
    updateCarForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameCar = document.querySelector<HTMLInputElement>('#update-name')?.value;
        const colorCar = document.querySelector<HTMLInputElement>('#update-color')?.value;
        const { currentCarId } = state;
        if (nameCar && colorCar && currentCarId) {
            const updatedCar = {
                color: `${colorCar}`,
                name: `${nameCar}`,
                id: currentCarId,
            };

            await updateCar(updatedCar);
            setCurrentId();
            renderMainHtml();
        }
    });
};

export default createControlPanel;