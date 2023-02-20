import { Popup } from "./Popup";

export class PopupForDelete extends Popup {
    constructor(popupSelector, handleDeleteCard) {
        super(popupSelector);
        this._handleDeleteCard = handleDeleteCard;
        this._button = this._popup.querySelector('.popup__delete-btn');
    }
    open(card, id) {
        this._id = id
        this._card = card
        this._setEventListeners();
        super.open()
    }
    close() {
        super.close()
    }
    _deleteElement() {
        this._card = null;
        this._id = null
    }
    _setEventListeners() {
        this._button.addEventListener('click', () => {
            this._handleDeleteCard(this._card, this._id)
            console.log(this._card, this._id)
            this._deleteElement();
            this.close()
        })
        super.setEventListeners()
    }
}