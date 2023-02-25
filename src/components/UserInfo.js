export class UserInfo {
    constructor({ userNameSelector, descriptionSelector }) {
        this._nickname = document.querySelector(userNameSelector);
        this._avatar = document.querySelector('.profile__avatar')
        this._description = document.querySelector(descriptionSelector);
    }
    getUserInfo() {
        const userData = {};
        userData.name = this._nickname.textContent;
        userData.about = this._description.textContent;

        return userData
    }

    getUserId() {
        return this._id
    }

    setAvatar(data) {
        this._avatar.src = data.avatar
    }

    setUserInfo(name, about, _id, avatar) {
        this._nickname.textContent = name;
        this._description.textContent = about;
        this._id = _id
        this._avatar.src = avatar


    }

}