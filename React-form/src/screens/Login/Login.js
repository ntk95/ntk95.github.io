import React, { Component } from 'react';
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions/profile';
import { getStore } from '../../utils';
import './style.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {
        username: 'Nhập tên: ',
        password: 'Nhập mật khẩu: '
      },
      loginStatus: '',
      submitted: false
    }
  }

  inputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.validationErrorMessage(event);
  }

  validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'username': 
        errors.username = value.length < 1 ? 'Nhập tên' : '';
        break;
      case 'password': 
        errors.password = value.length < 1 ? 'Nhập mật khẩu' : '';
        break;
      default:
        break;
    }
    this.setState({ errors });
  }

  validateForm = (errors) => {
    let valid = true;
    console.log(errors)
    Object.entries(errors).forEach(item => {
      console.log(item)
      item && item[1].length > 0 && (valid = false)
    })
    console.log(valid)
    return valid;
  }

  loginForm = async (event) => {
    this.setState({ submitted: true });
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info('Mẫu hợp lệ')
      const user = getStore('user')
      if (user) {
        this.props.dispatch(ActionCreators.login(user));
        this.props.history.push('/home')
      } else {
        this.setState({ loginStatus: 'Đăng nhập thất bại! Tài khoản hoặc mật khẩu không đúng'})
      }
    } else {
      console.log('Mẫu không hợp lệ')
    }
  }

  render() {
    const { username, password, errors, submitted, loginStatus } = this.state;
    return (
      <div className="pagecenter loginForm">
        <form>
          <div className="row">
            <div className="col-sm-3"></div>
            <label htmlFor="username" className="col-sm-2 col-form-label">Tên người dùng:</label>
            <div className="col-sm-3 mb-2">
              <input type="text" value={username} name="username" onChange={(e) => { this.inputChange(e)} } className="form-control" id="username" placeholder="Tên người dùng" />
              { submitted && errors.username.length > 0 &&  <span className='error'>{errors.username}</span>}
            </div>
            <div className="col-sm-4">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3"></div>
            <label htmlFor="password" className="col-sm-2 col-form-label">Mật khẩu:</label>
            <div className="col-sm-3 mb-2">
              <input type="password" value={password} autoComplete="on" name="password" onChange={(e) => { this.inputChange(e)} } className="form-control" id="password" placeholder="Mật khẩu" />
              { submitted && errors.password.length > 0 &&  <span className='error'>{errors.password}</span>}
            </div>
            <div className="col-sm-4"></div>
          </div>
          <div className="row">
            <div className="col-sm-12 center mt-1">
              { submitted && loginStatus.length > 0 &&  <span className='error'>{loginStatus}</span>}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 center mt-2">
              <button type="submit" className="button" onClick={this.loginForm}>Đăng nhập</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 mt-2"></div>
            <div className="col-sm-4 right">
              <a href="/register">Đăng ký</a>
            </div>
            <div className="col-sm-4 mt-2"></div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps)(withRouter(Login));
