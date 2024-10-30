import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ PopupSelector, handleFormSubmit }) {
    super({ PopupSelector });

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
      this._handleFormSubmit(this._getInputValues());

      this.close();
    });

    super.setEventListeners();
  }

  close() {
    this._popupForm.reset();

    super.close();
  }
}
