import { Esc } from "../utils/constants.js"
export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this._popup.classList.add('popup_is-open');
        document.addEventListener('keyup', this._handleEscClose);
    }
    close() {
        this._popup.classList.remove('popup_is-open');
        document.removeEventListener('keyup', this._handleEscClose);
    }
    _handleEscClose(evt) {
        if (evt.key === Esc) {
            this.close()
        }
    };
    setEventListeners() {
        const closeButton = this._popup.querySelector('.popup__close');
        closeButton.addEventListener('click', () => this.close());
        this._popup.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close(evt.target);
            }
        });
    }
}