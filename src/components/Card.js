import React from 'react';

function Card(props) {
  const { link, name, onCardClick, onCardDelete, id } = props;
  const [haveLike, setHaveLike] = React.useState(false);

  function handleClick(e) {
    if (e.target.className === 'place-card__image') {
      onCardClick(link);
    }
  }

  function handleCardDelete() {
    onCardDelete(id);
  }

  function handleCardLike() {
    setHaveLike(!haveLike);
  }

  return (
    <div className="place-card">
      <div onClick={handleClick} className="place-card__image" style={{ backgroundImage: `url(${link})` }}>
        <button onClick={handleCardDelete} className="place-card__delete-icon"></button>
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name">{name}</h3>
        <button onClick={handleCardLike} className={haveLike ? 'place-card__like-icon place-card__like-icon_liked' : 'place-card__like-icon'}></button>
      </div>
    </div>
  );
}

export default Card;