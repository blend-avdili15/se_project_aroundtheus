export default class Card {
    constructor(cardData, cardSelector, handleImageClick) {
        this._cardData = cardData
        this._name = cardData.name;
        this._link = cardData.link;
        this._cardSelector = cardSelector;

        this._handleImageclick = handleImageClick;
    }

    _setEventListeners() {
        this._element.querySelector('.card__image').addEventListener("click", () => {
            this._handleImageclick(this._cardData)
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