import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor({ PopupSelector }) {
       super({ PopupSelector });
       this._imageElement = this._popupElement.querySelector('#card-preview-image');
       this._captionElement = this._popupElement.querySelector('.modal__preview-title');
    }
 
    open(data) {
       this._imageElement.src = data.link;
       this._imageElement.alt = data.name;
       this._captionElement.textContent = data.name;
       super.open();
    }
 }