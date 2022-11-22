let popupElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__forms');
let nameInput = document.querySelector('.popup__form_type_name');
let nameDescription = document.querySelector('.popup__form_type_description');
let userName = document.querySelector('.profile__title');
let userDescription = document.querySelector('.profile__subtitle');
let saveButton = document.querySelector('.popup__save-button')
// Функции открытия и закрытия попапа
function popupOpen() {
    popupElement.classList.add('popup_is-open')
    nameInput.value = userName.textContent;
    nameDescription.value = userDescription.textContent;
};

function popupClose() {
    popupElement.classList.remove('popup_is-open')
};
// Сохранение данных из формы и их замена
function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userDescription.textContent = nameDescription.value;

    popupClose();
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);