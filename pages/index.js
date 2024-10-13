import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js"

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const cardData = {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  }

/* Wrappers */

const cardListEl = document.querySelector(".gallery__cards");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addNewCardModal = document.querySelector("#add-card-modal");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addNewCardForm = addNewCardModal.querySelector(".modal__form");
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
const profileDescriptionInput = document.querySelector("#profile-description-input");
const cardTitleInput = addNewCardForm.querySelector("#add-card-title-input");
const cardUrlInput = addNewCardForm.querySelector("#add-card-url-input");

// validation
const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
};

const editFormElement = profileEditModal.querySelector(".modal__form");
const addFormElement = addNewCardModal.querySelector(".modal__form");

// formvalidator
const addFormValidator = new FormValidator(validationSettings, addFormElement);
const editFormValidator = new FormValidator(validationSettings, editFormElement);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

/* Templates */

// const cardTemplate = document.querySelector("#card-template").content.firstElementChild;

/* --------------------------- Functions ------------------------------------------- */

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscClose);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscClose);
}

function renderCard(cardData) {
  const cardSelector = '#card-template';
  const card = new Card(cardData, cardSelector); 
  cardListEl.prepend(card.getView()); 
}

/* function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImageEl.addEventListener("click", () => {
    handlePreviewPicture(cardData);
  });

 deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

 likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;
  return cardElement;
} */

/* --------------------------Event Handlers ------------------------------------ */

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link });
  closePopup(addNewCardModal);
  e.target.reset();
}

// remove the following
/* function handlePreviewPicture(cardData) {
  previewImage.src = cardData.link;
  previewImage.alt = cardData.name;
  previewImageCaption.textContent = cardData.name;
  openPopup(previewImageModal);
} */

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