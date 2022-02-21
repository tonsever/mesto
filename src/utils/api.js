class Api {
  constructor(config) {
    this.urlUser = config.urlUser;
    this.urlCards = config.urlCards;
    this.headers = config.headers;
  }

  getUserInfo() {
    return fetch(this.urlUser, {
        headers: this.headers
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Произошла ошибка");
      })
    .catch(err => console.log(err));
  }

  updateUserInfo(name, about) {
    return fetch(this.urlUser, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({ name, about })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Произошла ошибка");
      })
    .catch(err => console.log(err));
  }

  getCards() {
    return fetch(this.urlCards, {
        headers: this.headers
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Произошла ошибка");
      })
    .catch(err => console.log(err));
  }
}

const API_URL = 'https://nomoreparties.co';

const config = {
  urlUser: `${API_URL}/cohort11/users/me`,
  urlCards: `${API_URL}/cohort11/cards`,
  headers: {
    authorization: '19913bd6-c98f-45a1-ae54-95f6284f3235',
    'Content-Type': 'application/json'
  }
};


export const api = new Api(config);

