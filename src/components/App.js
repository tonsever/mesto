import React from 'react';
import Header from './Header';
import Profile from './Profile';
import EditProfilePopup from './EditProfilePopup';
import PopupWithForm from './PopupWithForm';
import PopupImage from './PopupImage';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImageePopupOpen, setIsImageePopupOpen] = React.useState(false);
  const [cards, setСards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState();
  const [currentUser, setCurrentUser] = React.useState({ id: 3940932284 });



  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);

  }

  function handleImageePopupOpen() {
    setIsImageePopupOpen(!isImageePopupOpen);
  }



  function handleCardClick(selectedCard) {
    handleImageePopupOpen();
    setSelectedCard(selectedCard);
  }

  function handleCardDelete(id) {
    const newCards = cards.filter(card => card._id !== id);
    setСards(newCards);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const about = e.target.elements.job.value;
    api.updateUserInfo(name, about);
    currentUser.name = name;
    currentUser.about = about;
    handleEditProfileClick();
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const link = e.target.elements.link.value;
    const _id = Math.random()*10;
    const  newCard = {
      name: name,
      link: link,
      _id: _id
    }
    setСards([...cards, newCard]); 
    handleAddPlaceClick()
  }

  React.useEffect(() => {
    api.getCards().then(res => {
      setСards(res.slice(0, 10));
    });
  }, []);

  React.useEffect(() => {
    api.getUserInfo().then(res => {
      setCurrentUser({ ...res });
    });
  }, []);

  /* api.getCards().then(res => {
   console.log(res.slice(0, 10));
   })  */




  return (

    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Profile onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
        <div className="places-list root__section">
          {cards.map(
            ({ link, name, _id }) => {
              return (
                <Card
                  link={link}
                  name={name}
                  id={_id}
                  key={_id}
                  onCardClick={handleCardClick}
                  onCardDelete ={handleCardDelete}
                />
              );
            })
          }
        </div>
        <PopupWithForm name="new" title="Новое место" AddPlace={handleAddPlaceSubmit} onСlosePopup={handleAddPlaceClick} isOpen={isAddPlacePopupOpen ? 'popup_is-opened' : ''} />
        <EditProfilePopup name="edit" title="Редактировать профиль" onСlosePopup={handleEditProfileClick} isOpen={isEditProfilePopupOpen ? 'popup_is-opened' : ''} onSubmit={handleSubmit} />
        <PopupImage name="picture" card={selectedCard} onСlosePopup={handleImageePopupOpen} isOpen={isImageePopupOpen ? 'popup_is-opened' : ''} />
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;