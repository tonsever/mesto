import React from 'react';
import close from '../images/close.svg';

function PopupImage(props) {
  const {card, onClose} = props;
  return (
    <div className={`popup popup_${props.name} ${props.isOpen}`}>
      <div className="popup__picture">
        <img onClick={props.onСlosePopup}src={close} alt="картинка" className="popup__close popup__close_picture" />
        <img className="popup__image" alt="картинка" id="big_picture" src={card}/>
      </div>
    </div>
  );
}

export default PopupImage;
