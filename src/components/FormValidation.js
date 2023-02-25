export class FormValidation {
    constructor(config, validForm) {
        this._validForm = validForm;
        this._inputErrorClass = config.inputErrorClass;
        this._inputSelector = config.inputSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputs = [...this._validForm.querySelectorAll(this._inputSelector)];
        this._submitButtonSelector = config.submitButtonSelector;
        this._saveBtn = this._validForm.querySelector(this._submitButtonSelector);
    }
    // Приватные методы включения кнопок и убирания ошибки
    _disablingButtonOff() {
        this._saveBtn.classList.remove(this._inactiveButtonClass);
        this._saveBtn.disabled = false;
    }
    _errorDisplayOff(input, error) {
        error.classList.remove(this._inputErrorClass);
        input.classList.remove(this._inputSelector);
    }
    // // приватные методы отключения кнопок и появления ошибки

    _errorDisplayOn(input, error) {
        error.classList.add(this._inputErrorClass);
        input.classList.add(this._inputSelector);
    }
    disablingButtonOn() {
        this._saveBtn.classList.add(this._inactiveButtonClass);
        this._saveBtn.disabled = true;
    }

    _regulateErrors() {
        this._inputs.forEach((input) => {
            const error = this._validForm.querySelector(`#${input.id}-error`);
            console.log(error)
            if (input.validity.valid) {
                error.textContent = '';
                input.classList.remove(this._inputErrorClass);
            } else {
                error.textContent = input.validationMessage;
                input.classList.add(this._inputErrorClass);
            }
        })

    }

    _regulateButtons() {
        const isFormValid = this._inputs.every(input => {
            return input.validity.valid;
        })
        if (!isFormValid) {
            this.disablingButtonOn()
        } else {
            this._disablingButtonOff()
        }
    }
    _setEventListeners() {
        this._validForm.addEventListener('input', () => {
            this._regulateErrors();
            this._regulateButtons();
        });
    }

    enableValidation() {
        this._setEventListeners()
    }
}