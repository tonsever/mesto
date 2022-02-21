import React from 'react';
import close from '../images/close.svg';


function PopupWithForm(props) {
  const [name, setName] = React.useState();
  const [link, setLink] = React.useState();
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isNameValid, seIsNameValid] = React.useState(false);
  const [isLinkValid, setIsLinkValid] = React.useState(false);


  function handleChangeName(e) {
    setName(e.target.value);
    if (!(e.target.value === 0) && !(e.target.value.replace(/\s/g, '') === '')) {
      seIsNameValid(true);
    } else {seIsNameValid(false)}
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
    if (!(e.target.value === 0) && !(e.target.value.replace(/\s/g, '') === '')) {
      setIsLinkValid(true);
    } else {setIsLinkValid(false)}
  }

  function handleAddPlaceSubmit(e) {
    props.AddPlace(e)
    setName('');
    setLink('');
  }

  React.useEffect(() => {
    if (isNameValid && isLinkValid) {
      setIsFormValid(true)
    } else {setIsFormValid(false)}
  }, [link, name])


  return (
    <div className={`popup popup_${props.name} ${props.isOpen}`}>
      <div className="popup__content">
        <img onClick={props.onСlosePopup} src={close} alt="картинка" className={`popup__close popup__close__${props.name}`} />
        <h3 className="popup__title">{props.title}</h3>
        <form onSubmit={handleAddPlaceSubmit} className="popup__form" name={props.name}>
          <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Название" value={name} onChange={handleChangeName} />
          <span id="name-error" className="popup__error">{isNameValid ? '' : 'Это обязательное поле'}</span>
          <input type="text" name="link" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" value={link} onChange={handleChangeLink} />
          <span id="job-error" className="popup__error">{isLinkValid ? '' : 'Это обязательное поле'}</span>
          <button type='submit' className={isFormValid ? 'button popup__button button_active' : 'button popup__button'} disadisabled={isFormValid? 'ок' : undefined}>+</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
