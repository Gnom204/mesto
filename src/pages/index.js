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
// Загрузка профиля и карточек
Promise.all([api.loadingUserInfo(), api.loadingCard()])
    .then(([userData, cards]) => {
        userInfo.setUserInfo(userData.name, userData.about, userData._id);

        userInfo.setAvatar(userData)
        section.renderItems(cards);
    })
    .catch(error => console.log(error));

const section = new Section({
    renderer: (item) => section.addItem(renderCard(item))
}, '.elements__container')

const userInfo = new UserInfo({
    userNameSelector: '.profile__title',
    descriptionSelector: '.profile__subtitle'
});
// Изменение данных с помощью знначения инпутов
const popupWithProfileForm = new PopupWithForm('.profile-popup', {
    handleSubmitForm:
        (input) => {
            api.refreshProfileData(input.userName, input.userDescription)
                .then(res => userInfo.setUserInfo(res.name, res.about))
                .catch(error => console.log(error))
                .finally(() => {
                    popupWithProfileForm.loading('Сохранить')
                    popupWithProfileForm.close();
                })
        }
}, () => profileFormIsValid.disablingButtonOn()
)
const popupWithAvatarChange = new PopupWithForm('.avatar-popup', {
    handleSubmitForm:
        (input) => {
            api.changeAvatar(input.avatar)
                .then((res) => {
                    userInfo.setAvatar(res)
                    popupWithAvatarChange.close()
                })
                .catch(error => console.log(error))
                .finally(() => {
                    popupWithAvatarChange.loading('Сохранить')
                })
        }
}, () => formAvatarIsValid.disablingButtonOn()
)

//попап создания карточки
const popupAddCard = new PopupWithForm('.popup-AddCard', {
    handleSubmitForm:
        (item) => {
            popupAddCard.loading('Создание...')
            api.addCardOnServer(item.name, item.link)
                .then(() => {
                    section.addItem(renderCard(item));
                    popupAddCard.close();
                })
                .catch(error => { console.log(error) })
                .finally(() => {
                    popupAddCard.loading('Создать')
                })

        }
}, () => formAddCardIsValid.disablingButtonOn())

const popupWithImage = new PopupWithImage('.popup-img');

const submitForDeleteCard = (handleRemoveCard, cardId) => {
    popupForDelete.loading('Удаление...');
    api.deleteCard(cardId)
        .then(() => {
            handleRemoveCard()
            popupForDelete.close()
        })
        .catch(error => console.log(error))
        .finally(() => { popupForDelete.loading('Да') })
}

const popupForDelete = new PopupForDelete('.delete-popup', submitForDeleteCard)

const openDeletePopup = (card, cardId) => {
    popupForDelete.open(card, cardId)
}

function renderCard(item) {
    const card = new Card('#card-template', item, userInfo.getUserId(), () => popupWithImage.open(item), {
        handleDeleteCard:
            () => {
                openDeletePopup(card.deleteCard, item._id)
            },

        handleLikeCardFun: () => {
            api.putLike(item._id)
                .then(res => {
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
    return cardElement
};
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

