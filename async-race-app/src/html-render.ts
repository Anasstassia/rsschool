export const renderHtml = () => {
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
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);
};
