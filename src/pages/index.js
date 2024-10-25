import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import '../pages/index.css';
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PupupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

// Create instances of the classes
const CardSection = new Section({})


// initialize all my instnaces 




// all the rest







const initialCards = [
  {
    name: "Denver, Colorado",
    link: "https://images.unsplash.com/photo-1616127055279-6e4f17b87a5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlbnZlciUyMGNvbG9yYWRvfGVufDB8fDB8fHww",
  },
  {
    name: "San Diego, California",
    link: "https://images.unsplash.com/photo-1682453855731-19eb443a91c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFjaWZpYyUyMGJlYWNoJTIwcGllcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Los Angeles, California",
    link: "https://plus.unsplash.com/premium_photo-1697730143625-cc36da7bc150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "New York City, New York",
    link: "https://images.unsplash.com/photo-1448317971280-6c74e016e49c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV3JTIwWW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "London, England",
    link: "https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8fHww",
  },
  {
    name: "San Francisco, California",
    link: "https://plus.unsplash.com/premium_photo-1673002094407-a72547fa791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbiUyMGZyYW5jaXNjb3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

/* Wrappers */

const cardListEl = document.querySelector(".gallery__cards");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addNewCardModal = document.querySelector("#add-card-modal");
const addNewCardForm = document.querySelector("#card-form");
const profileEditForm = document.querySelector("#profile-form");

const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = document.querySelector("#card-preview-image");
const previewImageCaption = document.querySelector("#preview-caption");

/* Butttons & DOMs */

const profileEditButton = document.querySelector("#profile-edit-button");
const editProfileCloseButton = profileEditModal.querySelector(".modal__close");
const addNewCardCloseButton = addNewCardModal.querySelector(".modal__close");
const addNewCardButton = document.querySelector("#add-card-button");
const profileTitle = document.querySelector("#profile-title");
const profileDescription = document.querySelector("#profile-description");
const previewCloseButton = document.querySelector("#preview-close-button");

/* Form Data */

const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardTitleInput = document.querySelector("#add-card-title-input");
const cardUrlInput = document.querySelector("#add-card-url-input");

// validation
const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

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
const closeButtons = document.querySelectorAll(".modal__close");
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