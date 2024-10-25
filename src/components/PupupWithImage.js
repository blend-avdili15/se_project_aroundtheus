import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    open({ link, name }) {
    this._popupElement.querySelector("#preview-caption").textContent = name;
    const image = this._popupElement.querySelector("#card-preview-image");
    previewImage.src = link;
    previewImage.alt = '${name}';    
    super.open();
    }
}