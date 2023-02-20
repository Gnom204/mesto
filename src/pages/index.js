import { buttonOpenAddCardForm, avatar, buttonOpenEditProfileForm, initialCards, nameDescription, nameInput, popupAddCardLink, popupAddCardTitle, formAvatarPopup, avatarLink } from "../utils/constants.js";
import { validationConfig } from "../utils/constants.js";
import { Card } from "../components/Card.js"
import { FormValidation } from "../components/FormValidation.js"
import { PopupWithImage } from "../components/PopupWithImage.js";
import { cardContainer, formEditProfile } from "../utils/constants.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";
import { Api } from "../components/Api.js"
import './../pages/index.css'
import { PopupForDelete } from "../components/PopupForDelete.js";

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
    headers: {
        authorization: 'cf1f2fd8-5312-427b-b17f-83a02fd1127b',
        'Content-Type': 'application/json'
    }
});
const section = new Section({
    renderer: (item) => renderCard(item)
}, '.elements__container')

const userInfo = new UserInfo({
    userNameSelector: '.profile__title',
    descriptionSelector: '.profile__subtitle'
});
// Подстановка данных в профиль
api.loadingUserInfo()
    .then((res) => {
        userInfo.setUserInfo(res.name, res.about)
    })
// Изменение данных с помощью знначения инпутов
const popupWithProfileForm = new PopupWithForm('.profile-popup', {
    handleSubmitForm:
        (input) => {
            userInfo.setUserInfo(input.userName, input.userDescription);
            api.refreshProfileData(input.userName, input.userDescription)
                .catch(error => console.log(error))
            popupWithProfileForm.close();
            profileFormIsValid.disablingButtonOn();
            popupWithProfileForm.loading('Сохранить')
        }
})
const popupWithAvatarChange = new PopupWithForm('.avatar-popup', {
    handleSubmitForm:
        (input) => {
            api.changeAvatar(input.avatar)
                .then((res) => {
                    avatarLink.src = res.avatar;
                    popupWithAvatarChange.close()
                    console.log(input.avatar)
                    popupWithAvatarChange.loading('Сохранить')
                })
                .catch(error => console.log(error))
        }
})

//попап создания карточки
const popupAddCard = new PopupWithForm('.popup-AddCard', {
    handleSubmitForm:
        (item) => {
            api.addCardOnServer(item.name, item.link)
                .then(() => {
                    renderCard(item);
                    popupAddCard.close();
                    formAddCardIsValid.disablingButtonOn();
                    popupAddCard.loading('Создать')
                })
                .catch(error => { console.log(error) })

        }
})

const popupWithImage = new PopupWithImage('.popup-img');

const popupForDelete = new PopupForDelete('.delete-popup', (card, cardId) => api.deleteCard(cardId)
    .then(res => {
        console.log(res);
        card.remove()
    })
    .catch(error => console.log(error)))

const openDeletePopup = (card, cardId) => {
    popupForDelete.open(card, cardId)
}

function renderCard(item) {
    const card = new Card('#card-template', item, () => popupWithImage.open(item), () => openDeletePopup(cardElement, item._id),
        {
            handleLikeCardFun: () => {
                api.putLike(item._id)
                    .then(res => {
                        console.log(res)
                        card.handleLike(res.likes.length)
                    })
                    .catch(error => console.log(error))
            },
            handleDislikeCardFun: () => {
                api.deleteLike(item._id)
                    .then(res => {
                        card.handleDislike(res.likes.length)
                    })
                    .then(error => console.log(error))
            }
        });
    const cardElement = card.generateCard();
    // Добавляем в DOM
    section.addItem(cardElement)

};
api.loadingUserInfo()
    .then(res => {
        avatarLink.src = res.avatar
    })
// Отрисовка карточек с помощью renderer
api.loadingCard()
    .then(res => section.renderItems(res))
    .catch(error => console.log(error))
// переменные для валидации
const formAvatarIsValid = new FormValidation(validationConfig, formAvatarPopup);
const formAddCardIsValid = new FormValidation(validationConfig, popupAddCardForms);
const profileFormIsValid = new FormValidation(validationConfig, formEditProfile);
formAvatarIsValid.enableValidation()
formAddCardIsValid.enableValidation();
profileFormIsValid.enableValidation();
// События
avatar.addEventListener('click', () => popupWithAvatarChange.open())
popupAddCard.setEventListeners();
popupWithAvatarChange.setEventListeners();
popupWithImage.setEventListeners();
popupWithProfileForm.setEventListeners();

buttonOpenAddCardForm.addEventListener('click', () => {
    popupAddCard.open()
    formAddCardIsValid.disablingButtonOn()
})
buttonOpenEditProfileForm.addEventListener('click', () => {
    const userProfile = userInfo.getUserInfo();
    nameInput.value = userProfile.name;
    nameDescription.value = userProfile.about;
    popupWithProfileForm.open()
});

