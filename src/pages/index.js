import "../pages/index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {
  initialCards,
  profileSelectors,
  validationSettings,
  DOMElements,
} from "../components/Constants.js";

const {
  cardListEl,
  profileEditModal,
  addNewCardModal,
  addNewCardForm,
  profileEditForm,
  previewImageModal,
  previewImage,
  previewImageCaption,
  profileEditButton,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  cardTitleInput,
  cardUrlInput,
  previewCloseButton,
  closeButtons,
  addNewCardButton,
} = DOMElements;

// Create instances of the classes
const section = new Section(
  { items: initialCards, renderer: createCard },
  ".gallery__cards"
);

const userInfo = new UserInfo({
  nameSelector: "#profile-title-input",
  jobSelector: "#profile-description-input",
});
const popupWithImage = new PopupWithImage({
  PopupSelector: "#preview-image-modal",
});
const editProfilePopup = new PopupWithForm({
  PopupSelector: "#profile-edit-modal",
  handleFormSubmit: handleProfileEditSubmit,
});
const addNewCardPopup = new PopupWithForm({
  PopupSelector: "#add-card-modal",
  handleFormSubmit: handleAddCardFormSubmit,
});

// initialize all my instnaces
section.renderItems();

// event listeners
popupWithImage.setEventListeners();
editProfilePopup.setEventListeners();
addNewCardPopup.setEventListeners();

// formvalidator
const addFormValidator = new FormValidator(validationSettings, addNewCardForm);
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

/* --------------------------- Functions ------------------------------------------- */

function createCard(item) {
  const cardSelector = "#card-template";
  const card = new Card(item, cardSelector, handleImageClick);
  section.addItem(card.getView());
}

function renderCard(cardData /*, method = "prepend"*/) {
  const cardElement = createCard(cardData);
  section.addItem(cardElement);
}

function handleImageClick(cardData) {
  previewImage.src = cardData.link;
  previewImage.alt = cardData.name;
  previewImageCaption.textContent = cardData.name;
  //previewImageModal.open();
  //openPopup(previewImageModal);
  // popupWithImage.open();
}

/* --------------------------Event Handlers ------------------------------------ */

function handleProfileEditSubmit(e) {
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  editProfilePopup.close();
}

function handleAddCardFormSubmit(inputValues) {
  renderCard({ name: inputValues.title, link: inputValues.url });
  addNewCardPopup.close();
  addFormValidator.disableButton();
  addFormValidator.resetValidation();
}

/* ------------------------- Event Listeners -------------------------------------- */

profileEditButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  profileTitleInput.value = profileTitle.textContent.trim();
  profileDescriptionInput.value = profileDescription.textContent.trim();
  editProfilePopup.open();
});

addNewCardButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addNewCardPopup.open();
});
