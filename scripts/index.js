const popupElement = document.querySelector('.popup');// Попап
const editButton = document.querySelector('.profile__edit-button');//Кнопка открытия попапа
const closeButton = document.querySelector('.popup__close');//Кнопка закрытия попапа
const formElement = document.querySelector('.popup__forms');// формы
const nameInput = document.querySelector('.popup__form_type_name');// Форма заполнения имени
const nameDescription = document.querySelector('.popup__form_type_description');// Форма заполнения описания
const userName = document.querySelector('.profile__title');// Имя профиля
const userDescription = document.querySelector('.profile__subtitle');// Описание профиля
const saveButton = document.querySelector('.popup__save-button')//Кнопка Сохранить
const popupAddCard = document.querySelector('#popupAddCard');// Попап добавления карточек
const popupAddCardCloseButton = document.querySelector('#popupAddCardClose');// Крестик закрывающий попап добавления карточек
const popupAddCardForms = document.querySelector('#popupAddCardForms');// Формы попапа добавляющего карточки
const popupAddCardTitle = document.querySelector('#popupAddCardTitle');// Форма названия карточки
const addButton = document.querySelector('.profile__add-button');// Кнопка открытия попапа добавляющего карточки
const popupAddCardLink = document.querySelector('#popupAddCardLink');// Форма ссылки на картинку
const createButton = document.querySelector('#popupCreateButton');// Кнопка вызова попапа добавления карточек
const cardContainer = document.querySelector('.elements__container');// Контейнер с будущими карточками
const popupBigImg = document.querySelector('#popup-img');
let bigImg = document.querySelector('.popup__picture');
let bigImgTitle = document.querySelector('.popup__description');
const closeButtonBigImg = document.querySelector('#closeBigImg')
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

// Шаблон
const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');

// Рендер карточек

const generateCard = (dataCard) => {
    const newCard = cardTemplate.cloneNode(true);

    const title = newCard.querySelector('.element__heading');
    title.textContent = dataCard.name;
    const link = newCard.querySelector('.element__img');
    link.src = dataCard.link;
    link.alt = dataCard.name;
    // Просмотр изображений
    link.addEventListener('click', function () {
        bigImg.src = link.src;
        bigImgTitle.textContent = title.textContent;
        popupBigImg.classList.add('popup_is-open');
    });
    closeButtonBigImg.addEventListener('click', function () {
        popupBigImg.classList.remove('popup_is-open');
    });
    // Дабавления лайков
    likeButton = newCard.querySelector('.element__like');
    likeButton.addEventListener('click', function (likeElement) {
        likeElement.target.classList.toggle('element__like_type_active');
    });
    // Удаление карточек
    deleteBtn = newCard.querySelector('.element__trash-can');
    deleteBtn.addEventListener('click', handleDeleteCard);
    return newCard;
};

const handleDeleteCard = (evt) => {
    evt.target.closest('.element').remove();
};

const handleSubmitAddCardForm = (event) => {
    event.preventDefault();
    renderCard({
        name: popupAddCardTitle.value,
        link: popupAddCardLink.value
    });
    popupAddCardTitle.value = '';
    popupAddCardLink.value = '';

    popupAddCardClose();
};

const renderCard = (dataCard) => {
    cardContainer.prepend(generateCard(dataCard));
};

// Функции открытия и закрытия попапа добавления карточки
function popupAddCardOpen() {
    popupAddCard.classList.add('popup_is-open');
};

function popupAddCardClose() {
    popupAddCard.classList.remove('popup_is-open');
};
// Функции открытия и закрытия попапа изменения профиля
function popupOpen() {
    popupElement.classList.add('popup_is-open')
    nameInput.value = userName.textContent;
    nameDescription.value = userDescription.textContent;
};

function popupClose() {
    popupElement.classList.remove('popup_is-open')
};
// Функции открытия и закрытия попапа с картинкой
function popupBigImgOpen() {
    popupBigImg.classList.add('popup_is-open');
}
// Сохранение данных из формы и их замена
function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userDescription.textContent = nameDescription.value;

    popupClose();
}

initialCards.forEach((dataCard) => {
    renderCard(dataCard);
});
// События
popupAddCardForms.addEventListener('submit', handleSubmitAddCardForm)
popupAddCardCloseButton.addEventListener('click', popupAddCardClose);
addButton.addEventListener('click', popupAddCardOpen);
editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);