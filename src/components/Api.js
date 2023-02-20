export class Api {
    constructor(options) {
        this._options = options
        this._token = this._options.headers.authorization
        this._url = this._options.baseUrl
    }
    loadingUserInfo() {
        return fetch(this._url + '/users/me', {
            headers: {
                authorization: this._token
            }
        })
            .then(res => this._handleError(res))

    }

    loadingCard() {
        return fetch(this._url + '/cards', {
            headers: {
                authorization: this._token
            }
        })
            .then(res => this._handleError(res))
    }

    refreshProfileData(name, about) {
        return fetch(this._url + '/users/me', {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: `${name}`,
                about: `${about}`
            })
        })
            .then(res => this._handleError(res))
    }
    addCardOnServer(cardName, cardLink) {
        return fetch(this._url + '/cards', {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: `${cardName}`,
                link: `${cardLink}`
            })
        })
            .then(res => this._handleError(res))
    }
    deleteCard(cardId) {
        return fetch(this._url + `/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then(res => this._handleError(res))
    }
    putLike(cardId) {
        return fetch(this._url + `/cards/${cardId}/likes/`,
            {
                method: 'PUT',
                headers: {
                    authorization: this._token
                }
            })
            .then(res => this._handleError(res))
    }
    deleteLike(cardId) {
        return fetch(this._url + `/cards/${cardId}/likes/`,
            {
                method: 'DELETE',
                headers: {
                    authorization: this._token
                }
            })
            .then(res => this._handleError(res))
    }
    changeAvatar(url) {
        return fetch(this._url + '/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: url
            })
        })
            .then(res => this._handleError(res));
    }
    _handleError(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}