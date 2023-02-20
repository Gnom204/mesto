// Массив из 6 карточек 
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },

    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const validationConfig = {
    formSelector: '.popup__forms',
    inputSelector: '.popup__form',
    submitButtonSelector: '.popup__save-button',
    inputErrorClass: 'popup__form_type_error',
    errorClass: 'popup__error',
    inactiveButtonClass: 'popup__save-button_disabled',
};

export { initialCards, validationConfig };
export const profilePopup = document.querySelector('.profile-popup');// Попап 
export const buttonOpenEditProfileForm = document.querySelector('.profile__edit-button');//Кнопка открытия попапа 
export const closeButtons = document.querySelectorAll('.popup__close');//Кнопка закрытия попапа 
export const formEditProfile = document.querySelector('#profile-form');// формы 
export const nameInput = document.querySelector('.popup__form_type_name');// Форма заполнения имени 
export const nameDescription = document.querySelector('.popup__form_type_description');// Форма заполнения описания 
export const userName = document.querySelector('.profile__title');// Имя профиля 
export const userDescription = document.querySelector('.profile__subtitle');// Описание профиля 
export const cardContainer = document.querySelector('.elements__container');// Контейнер с будущими карточками  
export const popupAddCard = document.querySelector('.popup-AddCard');// Попап добавления карточек 
export const popupAddCardForms = document.querySelector('#popupAddCardForms');// Формы попапа добавляющего карточки 
export const popupAddCardTitle = document.querySelector('#popupAddCardTitle');// Форма названия карточки 
export const buttonOpenAddCardForm = document.querySelector('.profile__add-button');// Кнопка открытия попапа добавляющего карточки 
export const popupAddCardLink = document.querySelector('#popupAddCardLink');// Форма ссылки на картинку 
export const popupBigImg = document.querySelector('.popup-img');
export const bigImg = document.querySelector('.popup__picture');
export const bigImgTitle = document.querySelector('.popup__description');
export const Esc = 'Escape';
export const avatar = document.querySelector('.profile__avatar-bg')
export const avatarLink = document.querySelector('.profile__avatar')
export const formAvatarPopup = document.querySelector('#avatar-form')