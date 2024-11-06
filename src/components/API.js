class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
    }).then(this._handleServerResponse)
  }

  changeLikeCardStatus(cardId, like) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: like ? "PUT" : "DELETE",
        headers: this._headers,
    }).then(this._handleServerResponse)
  }

  

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "95e8554b-872f-4ef7-8683-f3b3f4c5ec28",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // other methods for working with the API
  api.getInitialCards()
   .then((result) => {
     // process the result
   })
   .catch((err) => {
     console.error(err); // log the error to the console
   });
}

GET https://around-api.en.tripleten-services.com/v1/users/me)
{
    "about": "Placeholder description",
 "avatar": "https://practicum-content.s3.amazonaws.com/resources/default-avatar_1704458546.png",
  "name": "Placeholder name",
  "_id": "e20537ed11237f86bbb20ccb"
}


});
