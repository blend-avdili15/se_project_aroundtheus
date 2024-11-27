export const initialCards = [
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

export const profileSelectors = {
  nameSelector: ".profile__name",
  jobSelector: ".profile__job",
};

export const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const cardListEl = document.querySelector(".gallery__cards");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addNewCardModal = document.querySelector("#add-card-modal");
const addNewCardForm = document.querySelector("#card-form");
const profileImageModal = document.querySelector("#profile-image-modal");
const profileImageForm = document.querySelector("#profile-image-form");
const deleteCardModal = document.querySelector("#delete-card-modal");
const profileEditForm = document.querySelector("#profile-form");
const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = document.querySelector("#card-preview-image");
const previewImageCaption = document.querySelector("#preview-caption");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileTitle = document.querySelector("#profile-title");
const profileDescription = document.querySelector("#profile-description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardTitleInput = document.querySelector("#add-card-title-input");
const cardUrlInput = document.querySelector("#add-card-url-input");
const previewCloseButton = document.querySelector("#preview-close-button");
const closeButtons = document.querySelectorAll(".modal__close");
const addNewCardButton = document.querySelector("#add-card-button");
const profileImageButton = document.querySelector("#profile-image-button");
const cardDeleteButton = document.querySelector("card-delete-button");
const cardLikeButton = document.querySelector(".card__like-button");
const cardSelector = "#card-template";
// const submitButton = document.querySelector(".modal__buton")

export const DOMElements = {
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
};
