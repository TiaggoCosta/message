const messageForm = document.querySelector('#message-form');
const linkForm = document.querySelector('#link-form');
const showForm = document.querySelector('#message-show');
const messageInput = document.querySelector('#message-input');
const linkInput = document.querySelector('#link-input');
const messageDecrypted = document.querySelector('#message-decrypted');
const {hash} = window.location;
const message = atob(hash.replace('#', ''));

if(message) {
    messageForm.classList.add('hide');
    showForm.classList.remove('hide');

    messageDecrypted.innerHTML = message;
}

messageForm.addEventListener('submit', event => {
    event.preventDefault();

    const encrypted = btoa(messageInput.value);
    messageInput.value = '';

    messageForm.classList.add('hide');
    linkForm.classList.remove('hide');

    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});