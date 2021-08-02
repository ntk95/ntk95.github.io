import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export class UserDetails extends Component {
  render() {
    const { firstName, lastName, age, email, interests, state, telephone } = this.props.user
    return (
      <div>
        <div>Tôi là <span className="bindtext">{firstName} {lastName}</span> và tôi <span className="bindtext">trên {age} tuổi</span> và bạn có thể gửi email đến <span className="bindtext">{email}</span>. Tôi sống ở thành phố <span className="bindtext">{state}</span>. Tôi có sở thích <span className="bindtext">{interests.join(', ')}</span> và xin vui lòng liên hệ với tôi qua điện thoại <span className="bindtext">{telephone}</span>.</div>
      </div>
    )
  }
}

UserDetails.propTypes = {
  user: PropTypes.object
}

export default UserDetails;
