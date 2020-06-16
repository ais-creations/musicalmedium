import React, {Component} from 'react'
import {Link, withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {registerUser} from "../../actions/authActions";
import classnames from "classnames";


class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      jobTitle: "Musician",
      description: "I do...",
      yearsOfExperience: 0,
      educationLevel: "No Qualifications",
      rating: 0,
      imgSrc: "https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onSelect = e => {
    this.setState({ [e.target.id]: e.options[e.selectedIndex].value });
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // getRating(qualificationLevel) {
  //   switch (qualificationLevel) {
  //     case "No Qualifications":
  //       return 0;
  //     case "Diploma or Equivalent":
  //       return 3.5;
  //     case "Degree":
  //       return 4.2;
  //   }
  // }

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      jobTitle: this.state.jobTitle,
      description: this.state.description,
      yearsOfExperience: this.state.yearsOfExperience,
      educationLevel: this.state.educationLevel,
      // rating: this.getRating(this.state.educationLevel)
      rating: this.state.rating,
      imgSrc: this.state.imgSrc,
      keywords: []
    };
    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <main className="page contact-us-page">
        <section className="clean-block clean-form dark">
          <section className="clean-block clean-form dark">
            <div className="container">
              <div className="block-heading">
                <h2 className="text-info" style={{ fontSize: '24px' }}>Sign Up</h2>
              </div>
              <form onSubmit={this.onSubmit}><a className="btn btn-primary btn-block text-white btn-google btn-user"
                                                role="button"
                                                style={{ border: 'none', backgroundColor: 'rgb(220,69,56)' }}><i
                className="fab fa-google"/>Sign up with Google</a><a
                className="btn btn-primary btn-block text-white btn-facebook btn-user" role="button"
                style={{ backgroundColor: 'rgb(59,89,152)', border: 'none' }}><i
                className="fab fa-facebook-f"/>&nbsp;Sign up with Facebook</a>
                <div className="d-flex flex-row align-items-center login-box-seperator-container"
                     style={{ paddingTop: '24px' }}>
                  <div className="login-box-seperator"/>
                  <div className="login-box-seperator-text">
                    <p style={{
                      marginBottom: '0px',
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      fontWeight: 400,
                      color: 'rgb(0,0,0)'
                    }}>or</p>
                  </div>
                  <div className="login-box-seperator"/>
                </div>
                <div className="form-group"><label htmlFor="email" style={{ fontSize: '14px' }}>Full Name</label>
                  <input onChange={this.onChange}
                         value={this.state.name}
                         error={errors.name} className={classnames("form-control item", {
                    invalid: errors.name
                  })} type="text" id="name" style={{ fontSize: '14px' }}/>
                  <span className="error-text">{errors.name}</span>
                </div>
                <div className="form-group"><label htmlFor="email" style={{ fontSize: '14px' }}>Email</label>
                  <input onChange={this.onChange}
                         value={this.state.email}
                         error={errors.email} className={classnames("form-control item", {
                    invalid: errors.email
                  })} type="text" id="email" style={{ fontSize: '14px' }}/>
                  <span className="error-text">{errors.email}</span>
                </div>
                <div className="form-group"><label htmlFor="password" style={{ fontSize: '14px' }}>Password</label>
                  <input onChange={this.onChange}
                         value={this.state.password}
                         error={errors.password}
                         className={classnames("form-control", {
                           invalid: errors.password
                         })} type="password" id="password" style={{ lineHeight: '14px' }}/>
                  <span className="error-text">{errors.password2}</span>
                </div>
                <div className="form-group"><label htmlFor="password" style={{ fontSize: '14px' }}>Confirm
                  Password</label>
                  <input onChange={this.onChange}
                         value={this.state.password2}
                         error={errors.password2} className={classnames("form-control", {
                    invalid: errors.password2
                  })} type="password" id="password2" style={{ lineHeight: '14px' }}/>
                  <span className="error-text">{errors.password2}</span>
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between">
                    <div className="form-check form-check-inline" id="form-check-rememberMe"><input
                      className="form-check-input" type="checkbox" id="formCheck-1" htmlFor="remember"
                      style={{ cursor: 'pointer' }} name="check"/><label className="form-check-label"
                                                                         htmlFor="formCheck-1"><span
                      className="label-text"
                      style={{ color: 'rgb(0,0,0)', fontSize: '14px' }}>Remember Me</span></label></div>
                    <a href="#" style={{ fontSize: '14px' }}>Forgot Password</a>
                  </div>
                </div>
                <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
                <div id="login-box-footer" style={{ padding: '10px 20px', paddingBottom: '23px', paddingTop: '18px' }}>
                  <p style={{ marginBottom: '0px', fontSize: '14px' }}>Already have an account?
                    <Link to={"/login"} style={{ fontSize: '14px', paddingRight: '8px', paddingLeft: '8px' }}>Log
                      in!</Link></p>
                </div>
              </form>
            </div>
          </section>
        </section>
      </main>
    )
  }
}

SignUpPage.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUpPage));
