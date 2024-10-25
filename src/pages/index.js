import '../pages/index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import { initialCards, profileSelectors, validationSettings, DOMElements } from "../components/Constants.js";

const { cardListEl, 
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
  closeButtons
} = DOMElements;
    

// Create instances of the classes
const section = new Section({ items: initialCards, renderer: createCard }, '.elements');
const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job' });
const popupWithImage = new PopupWithImage('.popup_type_image');
const popupWithForm = new PopupWithForm('.popup_type_edit', (formData) => {
   userInfo.setUserInfo(formData);
   popupWithForm.close();
});

// initialize all my instnaces 
section.renderItems();

// event listeners
popupWithImage.setEventListeners();
popupWithForm.setEventListeners();

////////////////////////////////

// const editProfileCloseButton = profileEditModal.querySelector(".modal__close");
// const addNewCardCloseButton = addNewCardModal.querySelector(".modal__close");
// const addNewCardButton = document.querySelector("#add-card-button");


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
  cardListEl[method](cardElement);
}

function handleImageClick(cardData) {
  previewImage.src = cardData.link;
  previewImage.alt = cardData.name;
  previewImageCaption.textContent = cardData.name;
  openPopup(previewImageModal);
}

/* --------------------------Event Handlers ------------------------------------ */

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
  editFormValidator.disableButton();
  e.target.reset();
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link });
  closePopup(addNewCardModal);
  addFormValidator.disableButton();
  e.target.reset();
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
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

/* form listeners */
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addNewCardForm.addEventListener("submit", handleAddCardFormSubmit);

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