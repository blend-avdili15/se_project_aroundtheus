const showErrorMessage = (input, { errorClass, inputErrorClass }) => {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;

    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}

const hideErrorMessage = (input, { errorClass, inputErrorClass }) => {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = '';

    error.classList.remove(errorClass);
    error.classList.remove(inputErrorClass);
}

const checkInputValidity = (input, settings) => {
    if(input.validity.valid) {
        hideErrorMessage(input, settings);
    } else {
        showErrorMessage(input, settings);
    }
}

const toggleButtonState = (inputs, button, settings) => {
    const isValid = inputs.every(input => input.validity.valid);

    if(isValid) {
        button.classList.remove(settings.inactiveButtonClass);
    } else {
        button.classList.add(settings.inactiveButtonClass);
    }
}


const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, ...settings }) => {
    const forms = [...document.querySelectorAll(formSelector)];

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
        })

        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                checkInputValidity(input, settings);
                toggleButtonState(inputs, button, settings);
            })

        })
    })
}


enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  });