export class UserInfo {
    constructor({ userNameSelector, descriptionSelector }) {
        this._nickname = document.querySelector(userNameSelector);
        this._description = document.querySelector(descriptionSelector);
    }
    getUserInfo() {
        const userData = {};
        userData.name = this._nickname.textContent;
        userData.about = this._description.textContent;

        return userData
    }
    setUserInfo(name, about) {
        this._nickname.textContent = name;
        this._description.textContent = about;
    }
}