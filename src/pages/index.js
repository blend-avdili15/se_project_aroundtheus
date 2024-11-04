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
  profileImageModal,
  profileImageForm,
  profileImageButton,
  cardDeleteButton,
  cardLikeButton,
  deleteCardModal,
} = DOMElements;

const generateCard = (item) => {
  const card = new Card(item, cardSelector, handleImageClick);

  return card.getView();
};

const createCard = (item) => {
  const card = generateCard(item);
  section.addItem(card);
};

// Create instances of the classes
const section = new Section(
  { items: initialCards, renderer: createCard },
  ".gallery__cards"
);

const userInfo = new UserInfo({
  nameSelector: "#profile-title",
  jobSelector: "#profile-description",
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

const profileImagePopup = new PopupWithForm({
  popupSelector: "#profile-image-modal",
  // handleFormSubmit: handleProfileImageSubmit,
});

const deleteCardImagePopup = new PopupWithForm({
  popupSelector: "#delete-card-modal",
  // handleFormSubmit: handleDeleteCardImageSubmit,
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

/* --------------------------Event Handlers ------------------------------------ */

function handleImageClick(cardData) {
  popupWithImage.open(cardData);
}

function handleDeleteIconClick(card) {
  deleteCardImagePopup.open();
}

function handleProfileEditSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  editProfilePopup.close();
}

function handleAddCardFormSubmit(inputValues) {
  createCard({ name: inputValues.title, link: inputValues.url });
  addNewCardPopup.close();
  addFormValidator.disableButton();
}

/* ------------------------- Event Listeners -------------------------------------- */

profileEditButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  const info = userInfo.getUserInfo();
  profileTitleInput.value = info.name.trim();
  profileDescriptionInput.value = info.description.trim();

  editProfilePopup.open();
});

addNewCardButton.addEventListener("click", () => {
  addNewCardPopup.open();
});

profileImageButton.addEventListener("click", () => {
  profileImagePopup.open();
});

cardDeleteButton.addEventListener("click", () => {
  deleteCardImagePopup.open();
});
