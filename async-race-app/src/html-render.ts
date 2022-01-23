import { state } from './state';
import { ICar } from './interface';
import createControlPanel, { renderPanel } from './control-panel';
import { addAnimationListeners } from './animation';
import { changeGaragePage, changePages, deleteCarElement, generateRandomCars, handleClickSelect } from './listeners';
import * as svg from './assets/car2.svg';

const CARS_PER_PAGE = 7;

export const renderMainHtml = () => {
    const html = `
        <div class="buttons">
            <button class="btn-to-garage">To garage</button>
            <button class="btn-to-winners">To winners</button>
        </div>
        <div class="container">
            ${renderPanel()}
            <div class="garage-container">
                ${renderGarage()}
                ${renderCars()}
            </div>
            <button class="previous">Prev</button>
            <button class="next">Next</button>
        </div>
        <div class="winners-page hidden">
            <h2 class="garage-title">Winners: 1 cars</h2>
            <h3> Page #N </h3>
            <table class="table" cellspacing="0" border="0" cellpadding="0">
                <thead>
                    <th>Number</th>
                    <th>Car</th>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Best time</th>
                </thead>
                <tbody>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <button class="previous">Prev</button>
            <button class="next">Next</button>
        </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    div.classList.add('wrapper');
    document.body.innerHTML = div.innerHTML;
    addAnimationListeners();
    deleteCarElement();
    handleClickSelect();
    createControlPanel();

    changePages();
    generateRandomCars();
    changeGaragePage();
};

const renderGarage = () => `
    <h2 class="garage-title">Garage: ${state.cars?.length} cars</h2>
    <h3> Page #${state.currentPage} </h3>
`;

const renderCars = () => {
    const { currentPage } = state;
    const carsChunks = state.cars?.reduce<ICar[][]>(
        (acc, el) => {
            if (acc[acc.length - 1].length === CARS_PER_PAGE) {
                acc.push([el]);
                return acc;
            }
            acc[acc.length - 1].push(el);
            return acc;
        },
        [[]]
    );
    return carsChunks?.[currentPage - 1]?.map((car) => renderCar(car)).join('');
};

export const renderCar = (car: ICar) => {
    const parser = new DOMParser();
    const el = parser.parseFromString(String(svg), 'image/svg+xml').querySelector('svg');
    el?.setAttribute('fill', car.color);

    return `
    <div class="car-container" id="car${car.id}">
        <div class="controllers">
            <button class="btn-select">Select</button>
            <button class="btn-remove">Remove</button>
            <span>${car.name}</span>
        </div>
        <div class="road">
            <div class="lights">
               <button class="green-btn"></button>
               <button class="red-btn"></button>
            </div>
            <div class="car">${el?.outerHTML}</div>
            <div class="finish-line"></div>
        </div>
    </div>
`;
};

export const fillUpdateForm = () => {
    const nameInput = document.querySelector<HTMLInputElement>('#update-name');
    const colorInput = document.querySelector<HTMLInputElement>('#update-color');
    if (nameInput && colorInput) {
        nameInput.value = state.cars?.find((e) => e.id === state.currentCarId)?.name || '';
        colorInput.value = state.cars?.find((e) => e.id === state.currentCarId)?.color || '';
    }
};
