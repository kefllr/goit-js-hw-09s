const form = document.querySelector('.feedback');
form.addEventListener('submit',submitForm );
form.addEventListener('input', inputForm );
const storageData = localStorage.getItem(`feedback-form-state`);

if (storageData) {
    const {email, message} = JSON.parse(storageData);

    form.querySelector(`.email-input`).value = email;
    form.querySelector(`.message-input`).value = message;
}

function inputForm(event) {
    if (event.target.classList.contains('email-input') || event.target.classList.contains('message-input')) {
        const email = form.querySelector('.email-input').value;
        const message = form.querySelector('.message-input').value;

        const feedbackData = { email, message };
        localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
    }
}

function submitForm(event) {
    event.preventDefault();

    const email = form.querySelector('.email-input').value;
    const message = form.querySelector('.message-input').value;

    console.log({ email, message });

    form.reset();
    localStorage.removeItem('feedback-form-state');
    
}