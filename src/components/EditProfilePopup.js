import React from 'react';
import close from '../images/close.svg';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState();
  const [about, setAbout] = React.useState();
  const [isFormValid, setIsFormValid] = React.useState(true);
  const [isNameValid, seIsNameValid] = React.useState(true);
  const [isAboutValid, setIsLAboutValid] = React.useState(true);


  function handleChangeName(e) {
    setName(e.target.value);
    if (!(e.target.value === 0) && !(e.target.value.replace(/\s/g, '') === '')) {
      seIsNameValid(true);
    } else {seIsNameValid(false)}
  }

  function handleChangeAbout(e) {
    setAbout(e.target.value);
    if (!(e.target.value === 0) && !(e.target.value.replace(/\s/g, '') === '')) {
      setIsLAboutValid(true);
    } else {setIsLAboutValid(false)}
  }

  function handleClose(e) {
    setName(currentUser.name);
    setAbout(currentUser.about);
    props.onСlosePopup(e);
    setIsFormValid(true);
    seIsNameValid(true);
    setIsLAboutValid(true);
  }

  React.useEffect(() => {
    if (isNameValid && isAboutValid) {
      setIsFormValid(true)
    } else {setIsFormValid(false)}
  }, [name, about])

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  return (
    <div className={`popup popup_${props.name} ${props.isOpen}`}>
      <div className="popup__content">
        <img onClick={handleClose} src={close} alt="картинка" className={`popup__close popup__close__${props.name}`} />
        <h3 className="popup__title">{props.title}</h3>
        <form onSubmit={props.onSubmit} className="popup__form" name={props.name}>
          <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Имя" value={name} onChange={handleChangeName} />
          <span id="name-error" className="popup__error">{isNameValid ? '' : 'Это обязательное поле'}</span>
          <input type="text" name="job" className="popup__input popup__input_type_link-url" placeholder="О себе" value={about} onChange={handleChangeAbout} />
          <span id="job-error" className="popup__error">{isAboutValid ? '' : 'Это обязательное поле'}</span>
          <button className={isFormValid ? 'button popup__button save__button button_active' : 'button popup__button save__button'} disadisabled={isFormValid? 'ок' : undefined}>Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfilePopup;