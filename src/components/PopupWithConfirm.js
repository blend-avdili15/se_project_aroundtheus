import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });

    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit();

      // this.close();
    });

    super.setEventListeners();
  }

  setSubmitHandler(newSubmitHandler) {
    this._handleFormSubmit = newSubmitHandler;
  }
}
