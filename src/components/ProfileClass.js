import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api.js';


class Profile extends React.Component {
  static contextType = CurrentUserContext;
  constructor(props) {
    super(props);
  }

  render() { 
	return (
    <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo" style={{ backgroundImage: `url(${this.context.avatar})` }}></div>
        <div className="user-info__data">
          <h1 className="user-info__name">{this.context.name}</h1>
          <p className="user-info__job">{this.context.about}</p>
        </div>
        <button onClick={this.props.onAddPlace} className="button user-info__button">+</button>
        <button onClick={this.props.onEditProfile} className="button edit-info__button">Edit</button>
      </div>
    </div>
  );
 
  }
}

export default Profile;
