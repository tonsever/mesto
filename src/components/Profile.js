import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
/* import { api } from '../utils/api.js'; */


function Profile(props) {
	
 /* const [nameInfo, setNameInfo] = React.useState();
  const [jobInfo, setJobInfo] = React.useState();
  const [photoInfo, setPhotoInfo] = React.useState();
  
  React.useEffect(() => {
    api.getUserInfo().then(res => {
	setNameInfo(res.name);
	setJobInfo(res.about);
	setPhotoInfo(res.avatar);
    });
  }); 
  
  return (
    <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo" style={{ backgroundImage: `url(${photoInfo})` }}></div>
        <div className="user-info__data">
          <h1 className="user-info__name">{nameInfo}</h1>
          <p className="user-info__job">{jobInfo}</p>
        </div>
        <button onClick={props.onAddPlace} className="button user-info__button">+</button>
        <button onClick={props.onEditProfile} className="button edit-info__button">Edit</button>
      </div>
    </div>
  ); */
  

  const currentUser = React.useContext(CurrentUserContext);
  
  return (
    <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
        <div className="user-info__data">
          <h1 className="user-info__name">{currentUser.name}</h1>
          <p className="user-info__job">{currentUser.about}</p>
        </div>
        <button onClick={props.onAddPlace} className="button user-info__button">+</button>
        <button onClick={props.onEditProfile} className="button edit-info__button">Edit</button>
      </div>
    </div>
  );
}

export default Profile;
