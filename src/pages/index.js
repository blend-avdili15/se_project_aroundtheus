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
} from "../utils/Constants.js";

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
  cardSelector,
} = DOMElements;

const createCard = (item) => {
  const card = new Card(item, cardSelector, handleImageClick);
  section.addItem(card.getView());
};

const renderCard = (cardData) => {
  createCard(cardData);
};

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
  popupSelector: "#preview-image-modal",
});
const editProfilePopup = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: handleProfileEditSubmit,
});
const addNewCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
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

function handleImageClick(cardData) {
  popupWithImage.open(cardData);
}

/* --------------------------Event Handlers ------------------------------------ */

function handleProfileEditSubmit(e) {
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  editProfilePopup.close();
}

// function handleProfileEditSubmit(e) {
//   const inputData = editProfilePopup._getInputValues();
//   userInfo.setUserInfo({
//     name: inputData["#profile-title-input"],
//     description: inputData["#profile-description-input"],
//   });
//   editProfilePopup.close();
// }

// const handleProfileEditSubmit = (inputData) => {
//   userInfo.setUserInfo({
//     name: inputData["#profile-title-input"],
//     description: inputData["#profile-description-input"],
//   });
//   editProfilePopupForm.close();
// };

function handleAddCardFormSubmit(inputValues) {
  renderCard({ name: inputValues.title, link: inputValues.url });
  addNewCardPopup.close();
  addFormValidator.disableButton();
}

/* ------------------------- Event Listeners -------------------------------------- */

profileEditButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  profileTitleInput.value = profileTitle.textContent.trim();
  profileDescriptionInput.value = profileDescription.textContent.trim();
  editProfilePopup.open();
});

addNewCardButton.addEventListener("click", () => {
  addNewCardPopup.open();
});
