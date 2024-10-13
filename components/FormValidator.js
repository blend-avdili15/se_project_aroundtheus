export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        
        this._form = formElement;
    }

    showInputError(inputEl) {
        const errorMessageEl = this._form.querySelector((`#${inputEl.id}-error`));
        inputEl.classList.add(this._inputErrorClass);
        errorMessageEl.textContent = inputEl.validationMessage;
        errorMessageEl.classList.add(this._errorClass);
    }
    
    hideInputError(inputEl) {
        const errorMessageEl = this._form.querySelector((`#${inputEl.id}-error`));
        inputEl.classList.remove(this._inputErrorClass);
        errorMessageEl.textContent = '';
        errorMessageEl.classList.remove(this._errorClass);
    }

    // toggleButtonState needs work. All the submitbutton need to be changed 
    _toggleButtonState() {
        if(hasInvalidInput(this._form)) {
            submitButton.classList.add(this._inactiveButtonClass)
            submitButton.disabled = true;
            return;
        }
            submitButton.classList.remove(this._inactiveButtonClass);
            submitButton.disabled = false;
    }

    _hasInvalidInput(inputList) {
        return !inputList.every((inputEl) => inputEl.validity.valid);
    }

    checkInputValidity(inputEl) {
        if(!inputEl.validity.valid) {
            showInputError(this._form, inputEl, this._inputSelector);
        } else {
            hideInputError(this._form, inputEl, this._inputSelector);
        }
    }

    _setEventListeners() {
        this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
        this._submitButton = this._form.querySelector(this._submitButtonSelector);

        inputEls.forEach(inputEl => {
            inputEl.addEventListener("input", (e) => {
                checkInputValidity(this._form, inputEl, this._inputSelector);
                toggleButtonState(inputEls, submitButton, this._inputSelector);
            });
        });
    }

    enableValidation() {
        this._form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
        setEventListeners(this._form, this._inputSelector);
    }
}

/* send to index.js     
const editFormValidator = new FormValidator(settings, editForm);
editFormValidator.enableValidation();
*/

/* const settings = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
}; */

// const addFormValidator = new FormValidator(settings, addForm);































/* class FormValidator {
    constructor() {
        this._inputvalidity = inputValidity;
        this._submitButton = submitButton;
    }

    enableValidation(FormValidator) {
        submitButton.forEach(element => {
            
        });
    }
} */