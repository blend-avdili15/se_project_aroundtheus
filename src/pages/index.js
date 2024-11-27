import "../pages/index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

import {
  initialCards,
  profileSelectors,
  validationSettings,
  DOMElements,
} from "../utils/Constants.js";
import Api from "../components/Api.js";

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
  const card = new Card(
    item,
    cardSelector,
    handleImageClick,
    handleDeleteIconClick,
    handleLikeIconClick
  );

  return card.getView();
};

const createCard = (item) => {
  const card = generateCard(item);
  section.addItem(card);
};

// Create instances of the classes
const section = new Section(
  { items: [], renderer: createCard },
  ".gallery__cards"
);

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "95e8554b-872f-4ef7-8683-f3b3f4c5ec28",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  nameSelector: "#profile-title",
  jobSelector: "#profile-description",
  avatarSelector: "#avatar-image",
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
  handleFormSubmit: handleProfileImageSubmit,
});

const deleteCardImagePopup = new PopupWithConfirm({
  popupSelector: "#delete-card-modal",
  handleFormSubmit: handleDeleteIconClick,
});

// event listeners
popupWithImage.setEventListeners();
editProfilePopup.setEventListeners();
addNewCardPopup.setEventListeners();
deleteCardImagePopup.setEventListeners();
profileImagePopup.setEventListeners();

// formvalidator
const addFormValidator = new FormValidator(validationSettings, addNewCardForm);
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
const profileImageValidator = new FormValidator(
  validationSettings,
  profileImageForm
);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
profileImageValidator.enableValidation();

// section.renderItems();

/* --------------------------Event Handlers ------------------------------------ */

function handleImageClick(cardData) {
  popupWithImage.open(cardData);
}

function handleDeleteIconClick(card) {
  deleteCardImagePopup.setSubmitHandler(() => {
    api
      .deleteCardStatus(card.id)
      .then(() => {
        card.deleteCard();
        deleteCardImagePopup.close();
      })
      .catch(console.error);
  });

  deleteCardImagePopup.open();
}

function handleLikeIconClick(cardId, isLiked, card) {
  api
    .changeLikeCardStatus(cardId, !isLiked)
    .then((updatedCard) => {
      card.updateLikes(updatedCard.likes);
    })
    .catch(console.error);
}

function setButtonText(form, text) {
  const submitButton = form.querySelector(".modal__button");
  submitButton.textContent = text;
}

function handleProfileEditSubmit(inputValues) {
  setButtonText(profileEditForm, "Saving ...");
  api
    .updateUserInfo({ name: inputValues.name, about: inputValues.description })
    .then((info) => {
      console.log(info);
      userInfo.setUserInfo({ name: info.name, description: info.about });
      editProfilePopup.close();
      profileEditForm.reset();
      setButtonText(profileEditForm, "Save");
    })
    .catch(console.error);
}

function handleAddCardFormSubmit(inputValues) {
  setButtonText(addNewCardForm, "Saving ...");
  api
    .createCard({ name: inputValues.title, link: inputValues.url })
    .then((newCard) => {
      createCard(newCard);
      addNewCardPopup.close();
      addNewCardForm.reset();
      addFormValidator.disableButton();
      setButtonText(addNewCardForm, "Save");
    })
    .catch(console.error);
}

function handleProfileImageSubmit(inputValues) {
  setButtonText(profileImageForm, "Saving ...");
  api
    .updateUserAvatar(inputValues.url)
    .then((updatedUserInfo) => {
      userInfo.setUserAvatar(updatedUserInfo.avatar);
      profileImagePopup.close();
      profileImageForm.reset();
      profileImageValidator.disableButton();
      setButtonText(profileImageForm, "Save");
    })
    .catch(console.error);
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

// API's //////////////////////////////////
api
  .getCardList()
  .then((cards) => {
    section.setRendererItems(cards);
    section.renderItems();
  })
  .catch(console.error);

api
  .getUserInfo()
  .then((userData) => {
    userInfo.setUserInfo({
      name: userData.name,
      description: userData.about,
    });
    userInfo.setUserAvatar(userData.avatar);
  })
  .catch(console.error);
