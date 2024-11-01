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
