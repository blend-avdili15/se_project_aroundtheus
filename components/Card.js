function openPopup(modal) {
    modal.classList.add("modal_opened");
    document.addEventListener("keydown", handleEscClose);
  }

  function closePopup(modal) {
    modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", handleEscClose);
  }

function handleEscClose(e) {
    if (e.key === "Escape") {
      const openedModal = document.querySelector(".modal_opened");
      if (openedModal) {
        closePopup(openedModal);
      }
    }
  }

export default class Card {
    constructor(cardData, cardSelector) {
        this._name = cardData.name;
        this._link = cardData.link;
        this._cardSelector = cardSelector;
    }

    _setEventListeners() {
        this._element.querySelector('.card__image').addEventListener("click", () => {
            this._handlePreviewPicture();
        });
        
        this._element.querySelector('.card__delete-button').addEventListener("click", () => {
            this._handleDeleteCard();
        });
        
        this._element.querySelector('.card__like-button').addEventListener("click", () => {
            this._handleLikeIcon();
        });
    }

    _handleLikeIcon() {
        this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
    }

    _handleDeleteCard() {
        this._element.remove();
    }

    _handlePreviewPicture() {
        const previewImage = document.querySelector("#card-preview-image"); 
        const previewImageCaption = document.querySelector("#preview-caption"); 
        const previewImageModal = document.querySelector("#preview-image-modal"); 

        previewImage.src = this._link;
        previewImage.alt = this._name;
        previewImageCaption.textContent = this._name;
        openPopup(previewImageModal);
    }

    /*_handleAddCardFormSubmit() {
        e.preventDefault();
        const name = cardTitleInput.value;
        const link = cardUrlInput.value;
        renderCard({ name, link });
        closePopup(addNewCardModal);
        e.target.reset();
      }*/

    _getTemplate() {
        const cardTemplate = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
        return cardTemplate;
    }

    getView() {
        this._element = this._getTemplate();

        const cardImage = this._element.querySelector(".card__image");
        cardImage.src = this._link;
        cardImage.alt = this._name;
        this._element.querySelector(".card__title").textContent = this._name;

        this._setEventListeners();
        return this._element;
    }

}