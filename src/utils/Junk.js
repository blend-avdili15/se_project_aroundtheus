/* function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscClose);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscClose);
} */ /*userInfo.setUserInfo({
    name: profileTitleInput.value,
    job: profileDescriptionInput.value,
  });*/

/* function handleEscClose(e) {
  if (e.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    if (openedModal) {
      closePopup(openedModal);
    }
  }
} */

/* form listeners */
// profileEditForm.addEventListener("submit", handleProfileEditSubmit);
// addNewCardForm.addEventListener("submit", handleAddCardFormSubmit);
/* closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closePopup(popup));
}); */

/* const modals = document.querySelectorAll(".modal");
modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      const popupInstance = [
        editProfilePopup,
        addNewCardPopup,
        popupWithImage,
      ].find((popup) => popup._popupElement === modal);
      popupInstance.close();
    }
  });
}); */

// might need to return this one
// const addNewCardButton = document.querySelector("#add-card-button");

/* (formData) => {
    userInfo.setUserInfo(formData);
    editProfilePopup.close();
  },*/ /* Overlay click to close modal */
/* const modals = document.querySelectorAll(".modal");
modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closePopup(modal);
    }
  });
}); */

// initialCards.forEach((cardData) => renderCard(cardData));

//   _setEventListeners() {
//     this._cardImage.addEventListener("click", () => {
//         this._handleImageClick(this._cardData);
//       });
//     };

// this._cardImage.addEventListener("click", () =>
//   this._handleImageClick({
//     name: this._name,
//     src: this._link,
//   })

// const createCard = (cardData) => {
//   const card = new Card(
//     {
//       cardData,
//       handleImageClick: () => {
//         popupWithImage.open();
//       },
//     },
//     cardSelector
//   );
//   section.addItem(card.getView());
// };

// const createCard = (item) => {
//   const cardSelector = "#card-template";
//   const card = new Card({ item, cardSelector, handleImageClick });
//   section.addItem(card.getView());
// };

// const renderCard = (cardData) => {
//   createCard(cardData);
// };

// // function renderCard(cardData, method = "prepend") {
//   const cardElement = createCard(cardData);
//   cardListEl[method](cardElement);
// }

// const createCard = (item) => {
//   const card = new Card(item, cardSelector, handleImageClick);
//   return card.getView(); // Return the card element
// };

// function createCard(item) {
//   const cardSelector = "#card-template";
//   const card = new Card(item, cardSelector, handleImageClick);
//   section.addItem(card.getView());
// }

// function renderCard(cardData) {
//   createCard(cardData);
// }

// this._element
//   .querySelector(".card__like-button")
//   .classList.toggle("card__like-button_active");

//   this._element.querySelector(".card__like-button")
//   .addEventListener("click", () => {
//     this._handleLikeIcon();
//   });

/* const settings = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
}; */

// setInputValues(data) {
//   this._inputList.forEach((input) => {
//     // Here you insert the `value` by the `name` of the input
//     input.value = data[input.name];
//   });
// }

// this._popupForm.reset();

// previewImage.src = cardData.link;
// previewImage.alt = cardData.name;
// previewImageCaption.textContent = cardData.name;
// addFormValidator.resetValidation();
// addFormValidator.resetValidation();

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
