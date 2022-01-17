import { carsNumber } from './api';

export const renderMainHtml = async () => {
    const count = await carsNumber();

    const html = `
    <div class="settings-container">
            <div class="buttons">
                <button class="btn-to-garage">To garage</button>
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
            ${renderGarage(count)}
            ${renderCar()}
        </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);
};

const renderGarage = (count: number) => `
    <h2 class="garage-title">Garage: ${count} cars</h2>
    <h3> Page #N </h3>
`;

export const renderCar = () => `
    <div class="car-container">
        <div class="controllers">
            <button class="btn-select">Select</button>
            <button class="btn-remove">Remove</button>
            <span>Car_name</span>
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
