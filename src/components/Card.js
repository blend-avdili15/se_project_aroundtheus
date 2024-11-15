export default class Card {
  constructor(cardData, cardSelector, handleImageClick, handleDeleteIconClick) {
    console.log(cardData);
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this.id = cardData._id;
    this._cardSelector = cardSelector;

    this._handleImageClick = handleImageClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._cardData);
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteIconClick(this);
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  deleteCard() {
    this._element.remove();
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardTemplate;
  }

  getView() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteCardModal = document.querySelector("#delete-card-modal");

    this._setEventListeners();
    return this._element;
  }
}
