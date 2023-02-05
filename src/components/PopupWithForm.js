import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, { handleSubmitForm }) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__forms');
        this._inputs = this._form.querySelectorAll('.popup__form');
    }
    _getInputValues() {
        this._inputValues = {}
        this._inputs.forEach(input => {
            this._inputValues[input.name] = input.value
        });
        return this._inputValues
    }
    close() {
        this._form.reset();
        super.close();
    }
    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues())
        });
        super.setEventListeners();
    }
}