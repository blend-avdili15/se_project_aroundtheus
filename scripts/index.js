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
/* const closeButtons = document.querySelectorAll(".popup__close"); Am I doing this correctly? */

/* Form Data */

const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const cardTitleInput = addNewCardForm.querySelector("#add-card-title-input");
const cardUrlInput = addNewCardForm.querySelector("#add-card-url-input");


/* Templates */

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* --------------------------- Functions ------------------------------------------- */

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

function getCardElement(cardData) {
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
}

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

function handlePreviewPicture(cardData) {
  previewImage.src = cardData.link;
  previewImage.alt = cardData.name;
  previewImageCaption.textContent = cardData.name;
  openPopup(previewImageModal);
}

/* ------------------------- Event Listeners -------------------------------------- */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

editProfileCloseButton.addEventListener("click", (e) => {
  closePopup(profileEditModal);
});

/* form listeners */
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addNewCardForm.addEventListener("submit", handleAddCardFormSubmit);

/* add new card modal (Event listener) */

addNewCardButton.addEventListener("click", () => {
  openPopup(addNewCardModal);
});

addNewCardCloseButton.addEventListener("click", () => {
  closePopup(addNewCardModal);
});

/* preview image modal */

previewCloseButton.addEventListener("click", () => {
  closePopup(previewImageModal);
});

/*closeButtons.forEach() => {
    const popup = button.closest(".popup");
    button.addEventListener("click", () => closePopup(popup));
}
Is this correct? Not sure here.     
*/

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
