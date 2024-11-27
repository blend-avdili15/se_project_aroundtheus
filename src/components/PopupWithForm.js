import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });

    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues(data) {
    this._inputList = this._popupElement.querySelectorAll(".modal__input");

    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // console.log(this._getInputValues());
      this._handleFormSubmit(this._getInputValues());
      // this._popupForm.reset();

      // this.close();
    });

    super.setEventListeners();
  }

  setSubmitHandler(newSubmitHandler) {
    this._handleFormSubmit = newSubmitHandler;
  }
}
