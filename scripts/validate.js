// Проверка всех форм на валидность
const checkAllInput = (inputs, saveBtn) => {
    const isFormValid = inputs.every(input => {
        return input.validity.valid;
    })
    addButtonDisable(saveBtn, isFormValid);
}
// Отключение кнопки
const addButtonDisable = (saveBtn, isFormValid,) => {
    if (!isFormValid) {
        saveBtn.forEach(btn => {
            btn.disabled = true;
        })
    } else {
        saveBtn.forEach(btn => {
            btn.disabled = false;
        })
    }
}
// Появление ошибки
const checkInputValidity = (input, config) => {
    const error = document.querySelector(`#${input.id}-error`);
    if (input.validity.valid) {
        error.textContent = '';
        input.classList.remove(config.inputErrorClass);
    } else {
        error.textContent = input.validationMessage;
        input.classList.add(config.inputErrorClass);
    }
}

const enableValidation = (config) => {
    const forms = [...document.querySelectorAll(config.formSelector)];

    forms.forEach(form => {
        const inputs = [...form.querySelectorAll(config.inputSelector)];
        const saveBtn = [...document.querySelectorAll(config.submitButtonSelector)];


        inputs.forEach(input => {
            input.addEventListener('input', () => {
                checkInputValidity(input, config);
                checkAllInput(inputs, saveBtn,);
            })
        })

    })
}

enableValidation({
    formSelector: '.popup__forms',
    inputSelector: '.popup__form',
    submitButtonSelector: '.popup__save-button',
    inputErrorClass: 'popup__form_type_error',
    errorClass: 'popup__error'
}); 