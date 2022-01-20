import { state } from './state';
import { ICar } from './interface';
import { renderPanel } from './control-panel';

export const renderMainHtml = () => {
    const html = `
        <div class="buttons">
            <button class="btn-to-garage">To garage</button>
            <button class="btn-to-winners">To winners</button>
        </div>
        <div class="container">
            ${renderPanel()}
            <div class="garage-container">
                ${renderGarage(state?.cars?.length)}
                ${state?.cars?.map((car) => renderCar(car)).join('')}
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
    document.body.appendChild(div);
};

const renderGarage = (count = 0) => `
    <h2 class="garage-title">Garage: ${count} cars</h2>
    <h3> Page #N </h3>
`;

export const renderCar = (car: ICar) => {
    setCarImage(car);
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
            <div class="car"></div>
            <div class="finish-line"></div>
        </div>
    </div>
`;
};

const setCarImage = async (car: ICar) => {
    const response = await fetch('./assets/car2.svg');
    const svg = await response.text();

    const currentCar = document.querySelector(`#car${car.id} .car`);
    if (currentCar) {
        currentCar.innerHTML = svg;
        const el = currentCar.querySelector('svg');
        if (el) {
            el.style.fill = car.color;
            el.style.width = '100px';
            el.style.height = '100px';
        }
    }
};
