import React, {Component} from "react";
import axios from "axios";

// import axios from "axios";

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
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
    axios.post('http://localhost:4000/users/login', userData)
        .then(res => console.log(res.data))
    console.log(userData);
  };

  render() {
    const { errors } = this.state;
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
              <p style={{
                marginBottom: '0px',
                paddingLeft: '10px',
                paddingRight: '10px',
                fontWeight: 400,
                color: 'rgb(0,0,0)'
              }}>
                or
              </p>
            </div>
            <div className="login-box-seperator"/>
          </div>
          <div className="form-group"><label htmlFor="email" style={{ fontSize: '14px' }}>Email</label>
            <input onChange={this.onChange}
                   value={this.state.email}
                   error={errors.email} className="form-control item" type="text" id="email" style={{ fontSize: '14px' }}/>
          </div>
          <div className="form-group"><label htmlFor="password" style={{ fontSize: '14px' }}>Password</label>
            <input onChange={this.onChange}
                   value={this.state.password}
                   error={errors.password} className="form-control" type="password" id="password" style={{ lineHeight: '14px' }}
            /></div>
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <div className="form-check form-check-inline" id="form-check-rememberMe"><input
                className="form-check-input" type="checkbox" id="formCheck-1" htmlFor="remember"
                style={{ cursor: 'pointer' }} name="check"/><label className="form-check-label"
                                                                   htmlFor="formCheck-1"><span className="label-text"
                                                                                               style={{
                                                                                                 color: 'rgb(0,0,0)',
                                                                                                 fontSize: '14px'
                                                                                               }}>Remember Me</span></label>
              </div>
              <a href="#" style={{ fontSize: '14px' }}>Forgot Password</a>
            </div>
          </div>
          <button className="btn btn-primary btn-block" type="submit">Log In</button>
          <div id="login-box-footer" style={{ padding: '10px 20px', paddingBottom: '23px', paddingTop: '18px' }}>
            <p style={{ marginBottom: '0px', fontSize: '14px' }}>Don't have an account?<a href="signup.html" style={{
              fontSize: '14px',
              paddingRight: '8px',
              paddingLeft: '8px'
            }}>Sign
              Up!</a></p>
          </div>
        </form>
      </div>
      // <div>
      // <form onSubmit={this.handleSubmit}>
      // <input
      //       type="email"
      //       name="email"
      //       placeholder="Email"
      //       value={this.state.email}
      //       onChange={this.handleChange}
      //       required
      //     />
      //
      //     <input
      //       type="password"
      //       name="password"
      //       placeholder="Password"
      //       value={this.state.password}
      //       onChange={this.handleChange}
      //       required
      //     />
      //
      //     <button type="submit">Login</button>
      //   </form>
      // </div>
    );
  }
}

export default Login