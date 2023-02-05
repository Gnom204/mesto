import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._bigImg = this._popup.querySelector('.popup__picture');
        this._bigImgTitle = this._popup.querySelector('.popup__description');
    }
    open(cardData) {
        this._bigImg.src = cardData.link;
        this._bigImg.alt = cardData.name;
        this._bigImgTitle.textContent = cardData.name;
        super.open()
    }
}