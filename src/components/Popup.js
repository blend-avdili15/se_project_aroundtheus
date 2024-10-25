export default class Popup {
    constructor({popupSelector}) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupElement.classList.add(".modal_opened");
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
            this._popupElement.classList.remove(".modal_opened");
            document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose() {
        EventTarget.preventDefault();

        if (e.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', (e) => {
            if (EventTarget.classList.contains('popup') || EventTarget.classList.contains('popup__close')){
                this.close();
            }
        })
    }
}