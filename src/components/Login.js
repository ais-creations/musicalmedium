import React, {Component} from "react";

// import axios from "axios";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    // axios
    //   .post(
    //     "http://localhost:3001/sessions",
    //     {
    //       user: {
    //         email: email,
    //         password: password
    //       }
    //     },
    //     { withCredentials: true }
    //   )
    //   .then(response => {
    //     if (response.data.logged_in) {
    //       this.props.handleSuccessfulAuth(response.data);
    //     }
    //   })
    //   .catch(error => {
    //     console.log("login error", error);
    //   });
    // event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info" style={{ fontSize: '24px' }}>Log In</h2>
        </div>
        <form>
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
            <input className="form-control item" type="text" id="email" style={{ fontSize: '14px' }}/>
          </div>
          <div className="form-group"><label htmlFor="password" style={{ fontSize: '14px' }}>Password</label><input
            className="form-control" type="password" id="password" style={{ lineHeight: '14px' }}/></div>
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <div className="form-check form-check-inline" id="form-check-rememberMe"><input
                className="form-check-input" type="checkbox" id="formCheck-1" htmlfor="remember"
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
          <button className="btn btn-primary btn-block" type="button">Log In</button>
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