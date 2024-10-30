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
  //addNewCardButton,
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
  /* (formData) => {
    userInfo.setUserInfo(formData);
    editProfilePopup.close();
  },*/
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

//

const addNewCardButton = document.querySelector("#add-card-button");

// formvalidator
const addFormValidator = new FormValidator(validationSettings, addNewCardForm);
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

/* --------------------------- Functions ------------------------------------------- */

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscClose);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscClose);
}

function createCard(item) {
  const cardSelector = "#card-template";
  const card = new Card(item, cardSelector, handleImageClick);
  return card.getView();
}

function renderCard(cardData, method = "prepend") {
  const cardElement = createCard(cardData);
  section.addItem(cardElement);
}

function handleImageClick(cardData) {
  previewImage.src = cardData.link;
  previewImage.alt = cardData.name;
  previewImageCaption.textContent = cardData.name;
  openPopup(previewImageModal);
}

/* --------------------------Event Handlers ------------------------------------ */

function handleProfileEditSubmit(e) {
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(inputValues) {
  renderCard({ name: inputValues.title, link: inputValues.url });
  closePopup(addNewCardModal);
  addFormValidator.disableButton();
  addFormValidator.resetValidation();
}

function handleEscClose(e) {
  if (e.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    if (openedModal) {
      closePopup(openedModal);
    }
  }
}

/* ------------------------- Event Listeners -------------------------------------- */

profileEditButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  profileTitleInput.value = profileTitle.textContent.trim();
  profileDescriptionInput.value = profileDescription.textContent.trim();
  openPopup(profileEditModal);
});

/* form listeners */
// profileEditForm.addEventListener("submit", handleProfileEditSubmit);
// addNewCardForm.addEventListener("submit", handleAddCardFormSubmit);

/* add new card modal (Event listener) */

addNewCardButton.addEventListener("click", () => {
  openPopup(addNewCardModal);
});

/* close buttons */

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closePopup(popup));
});

/* Overlay click to close modal */
const modals = document.querySelectorAll(".modal");
modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closePopup(modal);
    }
  });
});

initialCards.forEach((cardData) => renderCard(cardData));
