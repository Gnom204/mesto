const forms = [...document.querySelectorAll('.popup__forms')];
const saveBtn = [...document.querySelectorAll('.popup__save-button')];
// Проверка всех форм на валидность
const checkAllInput = (inputs) => {
    const isFormValid = inputs.every(input => {
        return input.validity.valid;
    })
    addButtonDisable(isFormValid);
}
// Отключение кнопки
const addButtonDisable = (isFormValid) => {
    if (!isFormValid) {
        saveBtn.forEach(btn => {
            btn.disabled = true
        })
    } else {
        saveBtn.forEach(btn => {
            btn.disabled = false
        })
    }
}
// Появление ошибки
const checkInputValidity = (input) => {
    const error = document.querySelector(`#${input.id}-error`);
    if (input.validity.valid) {
        error.textContent = '';
    } else {
        error.textContent = input.validationMessage;
    }
}


forms.forEach(form => {
    const inputs = [...form.querySelectorAll('.popup__form')];

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            checkInputValidity(input);
            checkAllInput(inputs);
        })
    })

})