// napisz funkcję do generowania dynamicznie formularzy 
function generateFormOnPattern(settings) {
    const form = document.createElement("form");
    const h4 = document.createElement("h4");
    const input = document.createElement("input");
    const textarea = document.createElement("textarea");
    const btn = document.createElement("button");

    form.setAttribute("method", settings.method);
    form.setAttribute("action", settings.action);

    input.setAttribute("type", settings.inputs[1].type);
    input.setAttribute("name", settings.inputs[1].name);
    input.setAttribute("placeholder", settings.inputs[1].placeholder);

    textarea.setAttribute("name", settings.inputs[2].name);
    textarea.setAttribute("placeholder", settings.inputs[2].placeholder);

    btn.setAttribute("type", settings.inputs[3].type);
    btn.textContent = settings.inputs[3].label;

    h4.textContent = "Skontaktuj się z nami";
    form.appendChild(h4);
    form.appendChild(input);
    form.appendChild(textarea);
    form.appendChild(btn);

    document.body.appendChild(form);

}



// na podstawie ustalonego schematu testSettings
const testSettings = {
    action: '/contact/by-mail',
    method: 'POST',
    inputs: [
        { type: 'header', label: 'Skontaktuj się z nami' },
        { name: 'email', type: 'email', placeholder: 'Wpisz swój email' },
        { name: 'content', type: 'textarea', placeholder: 'Wpisz treść wiadomości' },
        { type: 'submit', label: 'Wyślij wiadomość' }
    ]
}

generateFormOnPattern(testSettings)

// powinien wyjść taki formularz
{/* <form method="POST" action="/contact/by-mail">
    <h4>Skontaktuj się z nami</h4>
    <input type="email" name="email" placeholder="Wpisz swój email"></input>
    <textarea name="content" placeholder="Wpisz treść wiadomości"></textarea>
    <button>
        Wyślij wiadomość
    </button>
</form> */}



