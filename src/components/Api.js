export class Api {
    constructor(options) {
        this._options = options
    }
    loadingUserInfo() {
        fetch('https://nomoreparties.co/v1/cohort-59/users/me', {
            headers: {
                authorization: 'cf1f2fd8-5312-427b-b17f-83a02fd1127b'
            }
        })
            .then(res => res.json())
            .then((info) => {
                console.log(info)
            })
    }
}