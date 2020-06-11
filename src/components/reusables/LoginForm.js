import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";
import classnames from "classnames";
import Redirect from "react-router-dom/es/Redirect";
import {Link} from "react-router-dom";

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      toDashboard: false
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.auth.isAuthenticated) {
      this.setState(() => ({ toDashboard: true })) // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);

  };

  render() {
    const { errors } = this.state;
    if (this.state.toDashboard === true) {
      return <Redirect to='/dashboard'/>
    }
    return (
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info" style={{ fontSize: '24px' }}>Log In</h2>
        </div>
        <form onSubmit={this.onSubmit}>
          <a className="btn btn-primary btn-block text-white btn-google btn-user" role="button"
             style={{ border: 'none', backgroundColor: 'rgb(220,69,56)' }}>
            <i className="fab fa-google"/>
            &nbsp;Log in with Google
          </a>
          <a className="btn btn-primary btn-block text-white btn-facebook btn-user" role="button"
             style={{ backgroundColor: 'rgb(59,89,152)', border: 'none' }}>
            <i className="fab fa-facebook-f"/>
            &nbsp;Log in with Facebook
          </a>
          <div className="d-flex flex-row align-items-center login-box-seperator-container"
               style={{ paddingTop: '24px' }}>
            <div className="login-box-seperator"/>
            <div className="login-box-seperator-text">
              <p style={{ marginBottom: '0px', paddingLeft: '10px', paddingRight: '10px', color: 'rgb(0,0,0)' }}>
                or
              </p>
            </div>
            <div className="login-box-seperator"/>
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ fontSize: '14px' }}>Email</label>
            <input onChange={this.onChange} value={this.state.email}
                   className={classnames("form-control item", { invalid: errors.email || errors.emailnotfound })}
                   type="text" id="email" style={{ fontSize: '14px' }}/>
            <span className="error-text">{errors.email}{errors.emailnotfound}</span>
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ fontSize: '14px' }}>Password</label>
            <input onChange={this.onChange} value={this.state.password}
                   className={classnames("form-control", { invalid: errors.password || errors.passwordincorrect })}
                   type="password" id="password" style={{ lineHeight: '14px' }}/>
            <span className="error-text">{errors.password}{errors.passwordincorrect}</span>
          </div>
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <div className="form-check form-check-inline" id="form-check-rememberMe">
                <input className="form-check-input" type="checkbox" id="formCheck-1" style={{ cursor: 'pointer' }}
                       name="check"/>
                <label className="form-check-label" htmlFor="formCheck-1">
                  <span className="label-text" style={{ color: 'rgb(0,0,0)', fontSize: '14px' }}>
                    Remember Me
                  </span>
                </label>
              </div>
              <a href="#" style={{ fontSize: '14px' }}>Forgot Password</a>
            </div>
          </div>
          <button className="btn btn-primary btn-block" type="submit">Log In</button>
          <div id="login-box-footer" style={{ padding: '10px 20px', paddingBottom: '23px', paddingTop: '18px' }}>
            <p style={{ marginBottom: '0px', fontSize: '14px' }}>Don't have an account?
              <Link to="/signup" style={{ fontSize: '14px', paddingRight: '8px', paddingLeft: '8px' }}>
                Sign Up!
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
