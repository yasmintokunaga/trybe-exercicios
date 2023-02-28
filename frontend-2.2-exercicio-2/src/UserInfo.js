import React from 'react';
import './UserInfo.css'

class UserInfo extends React.Component {
  render() {
    const { id, name, email } = this.props;

    return (
      <div className='user-info'>
        <p><span className='user-label'>Id:</span><span>{id}</span></p>
        <p><span className='user-label'>Id:</span><span>{name}</span></p>
        <p><span className='user-label'>Id:</span><span>{email}</span></p>
      </div>
    )
  }
}

export default UserInfo;