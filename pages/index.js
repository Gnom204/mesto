import { buttonOpenAddCardForm, buttonOpenEditProfileForm, initialCards, nameDescription, nameInput, popupAddCardLink, popupAddCardTitle } from "../utils/constants.js";
import { validationConfig } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidation } from "../components/FormValidation.js"
import { PopupWithImage } from "../components/PopupWithImage.js";
import { cardContainer, formEditProfile } from "../utils/constants.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";

const section = new Section({
    items: initialCards,
    renderer: (item) => renderCard(item)
}, '.elements__container')
const userInfo = new UserInfo({
    userNameSelector: '.profile__title',
    descriptionSelector: '.profile__subtitle'
});
const popupWithProfileForm = new PopupWithForm('.profile-popup', {
    handleSubmitForm:
        (input) => {
            userInfo.setUserInfo(input.userName, input.userDescription)
            popupWithProfileForm.close()
        }
})
const popupWithForm = new PopupWithForm('.popup-AddCard', {
    handleSubmitForm:
        (item) => {
            renderCard(item);
            popupWithForm.close()
        }
})

const popupWithImage = new PopupWithImage('.popup-img');
function renderCard(item) {
    const card = new Card('#card-template', item, () => popupWithImage.open(item));
    const cardElement = card.generateCard();
    // Добавляем в DOM
    section.addItem(cardElement)
};
section.renderItems() // Отрисовка карточек с помощью renderer
// переменные для валидации
const formAddCardIsValid = new FormValidation(validationConfig, popupAddCardForms);
const profileFormIsValid = new FormValidation(validationConfig, formEditProfile);

formAddCardIsValid.enableValidation();
profileFormIsValid.enableValidation();
// События
popupWithForm.setEventListeners();
popupWithImage.setEventListeners();
popupWithProfileForm.setEventListeners();
buttonOpenAddCardForm.addEventListener('click', () => {
    popupWithForm.open()
    formAddCardIsValid.disablingButtonOn()
})
buttonOpenEditProfileForm.addEventListener('click', () => {
    const userProfile = userInfo.getUserInfo();
    nameInput.value = userProfile.name;
    nameDescription.value = userProfile.about;
    popupWithProfileForm.open()
});

