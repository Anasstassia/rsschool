import { state } from './state';
import { ICar } from './interface';

export const renderMainHtml = () => {
    const html = `
        <div class="container">
            <div class="settings-container">
                <div class="buttons">
                    <button class="btn-to-winners">To winners</button>
                </div>
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
            </div>
            <div class="race-buttons">
                <button class="btn-race">Race</button>
                <button class="btn-reset">Reset</button>
                <button class="btn-generate">Generate cars</button>
            </div>
            <div class="garage-container">
                ${renderGarage(state?.cars?.length)}
                ${state?.cars?.map((car) => renderCar(car))}
            </div>
            <button class="previous">Prev</button>
            <button class="next">Next</button>
        </div>
        <div class="winners-page hidden">
            <button class="btn-to-garage">To garage</button>
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
            <span>${car?.name}</span>
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
