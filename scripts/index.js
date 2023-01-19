import { initialCards } from "./data.js";
import { validationConfig } from "./data.js";
import { Card } from "./Card.js";
import { FormValidation } from "./FormValidation.js"

const profilePopup = document.querySelector('.profile-popup');// Попап
const buttonOpenEditProfileForm = document.querySelector('.profile__edit-button');//Кнопка открытия попапа
const closeButtons = document.querySelectorAll('.popup__close');//Кнопка закрытия попапа
const formEditProfile = document.querySelector('#profile-form');// формы
const nameInput = document.querySelector('.popup__form_type_name');// Форма заполнения имени
const nameDescription = document.querySelector('.popup__form_type_description');// Форма заполнения описания
const userName = document.querySelector('.profile__title');// Имя профиля
const userDescription = document.querySelector('.profile__subtitle');// Описание профиля
const cardContainer = document.querySelector('.elements__container');// Контейнер с будущими карточками 
const popupAddCard = document.querySelector('.popup-AddCard');// Попап добавления карточек
const popupAddCardForms = document.querySelector('#popupAddCardForms');// Формы попапа добавляющего карточки
const popupAddCardTitle = document.querySelector('#popupAddCardTitle');// Форма названия карточки
const buttonOpenAddCardForm = document.querySelector('.profile__add-button');// Кнопка открытия попапа добавляющего карточки
const popupAddCardLink = document.querySelector('#popupAddCardLink');// Форма ссылки на картинку
const popupBigImg = document.querySelector('.popup-img');
const bigImg = document.querySelector('.popup__picture');
const bigImgTitle = document.querySelector('.popup__description');
const Esc = 'Escape';
// подставление данных в попап
function presentDataPopup(data) {
    bigImg.src = data.link;
    bigImg.alt = data.name;
    bigImgTitle.textContent = data.name;
    openPopup(popupBigImg);
}
// Рендер карточек

function renderCard(item) {
    const card = new Card('#card-template', item, presentDataPopup);
    const cardElement = card.generateCard();

    // Добавляем в DOM
    cardContainer.prepend(cardElement);
};

initialCards.forEach(item => {
    renderCard(item)
})

const handleSubmitAddCardForm = (event) => {
    event.preventDefault();
    renderCard({
        name: popupAddCardTitle.value,
        link: popupAddCardLink.value
    });
    formAddCardIsValid.disablingButtonOn();
    closePopup(popupAddCard);
};

// Сохранение данных из формы и их замена
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userDescription.textContent = nameDescription.value;
    closePopup(profilePopup);
};
// Подставление данных в профиль-попап
function presentDataProfilePopup() {
    nameInput.value = userName.textContent;
    nameDescription.value = userDescription.textContent;
}
// Универсальное открытие и закрытие попапов
function openPopup(popup) {
    popup.classList.add('popup_is-open');
    document.addEventListener('keydown', closePopupOnEsc);
    popup.addEventListener('click', closePopupOnOverlay);
};

function closePopup(popup) {
    popup.classList.remove('popup_is-open');
    popup.removeEventListener('click', closePopupOnOverlay)
    document.removeEventListener('keydown', closePopupOnEsc);
};
// Отключение кнопки
closeButtons.forEach((button) => {
    // находим 1 раз ближайший к крестику попап 
    const popup = button.closest('.popup');
    // устанавливаем обработчик закрытия на крестик
    button.addEventListener('click', () => closePopup(popup));
});
// Закрытие попапа нажатием на Esc
function closePopupOnEsc(evt) {
    if (evt.key === Esc) {
        const openedPopup = document.querySelector('.popup_is-open');
        closePopup(openedPopup)
    }
}
// Закрытие поапа кликом на оверлей
function closePopupOnOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
};

const formAddCardIsValid = new FormValidation(validationConfig, popupAddCardForms);
const profileFormIsValid = new FormValidation(validationConfig, formEditProfile);

formAddCardIsValid.enableValidation();
profileFormIsValid.enableValidation();
// События
popupAddCardForms.addEventListener('submit', handleSubmitAddCardForm)
buttonOpenAddCardForm.addEventListener('click', () => openPopup(popupAddCard));
buttonOpenEditProfileForm.addEventListener('click', () => {
    openPopup(profilePopup)
    presentDataProfilePopup()
}); formEditProfile.addEventListener('submit', handleProfileFormSubmit);