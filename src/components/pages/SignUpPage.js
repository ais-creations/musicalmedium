import React, {Component} from 'react'
import Login from "../reusables/Login";

class SignUpPage extends Component {
  render() {
    return (
      <main className="page contact-us-page">
        <section className="clean-block clean-form dark">
          <section className="clean-block clean-form dark">
            <div className="container">
              <div className="block-heading">
                <h2 className="text-info" style={{fontSize: '24px'}}>Sign Up</h2>
              </div>
              <form><a className="btn btn-primary btn-block text-white btn-google btn-user" role="button" style={{border: 'none', backgroundColor: 'rgb(220,69,56)'}}><i className="fab fa-google" />Sign up with Google</a><a className="btn btn-primary btn-block text-white btn-facebook btn-user" role="button" style={{backgroundColor: 'rgb(59,89,152)', border: 'none'}}><i className="fab fa-facebook-f" />&nbsp;Sign up with Facebook</a>
                <div className="d-flex flex-row align-items-center login-box-seperator-container" style={{paddingTop: '24px'}}>
                  <div className="login-box-seperator" />
                  <div className="login-box-seperator-text">
                    <p style={{marginBottom: '0px', paddingLeft: '10px', paddingRight: '10px', fontWeight: 400, color: 'rgb(0,0,0)'}}>or</p>
                  </div>
                  <div className="login-box-seperator" />
                </div>
                <div className="form-group"><label htmlFor="email" style={{fontSize: '14px'}}>Full Name</label><input className="form-control item" type="text" id="email" style={{fontSize: '14px'}} /></div>
                <div className="form-group"><label htmlFor="email" style={{fontSize: '14px'}}>Email</label><input className="form-control item" type="text" id="email" style={{fontSize: '14px'}} /></div>
                <div className="form-group"><label htmlFor="password" style={{fontSize: '14px'}}>Password</label><input className="form-control" type="password" id="password" style={{lineHeight: '14px'}} /></div>
                <div className="form-group"><label htmlFor="password" style={{fontSize: '14px'}}>Confirm Password</label><input className="form-control" type="password" id="password" style={{lineHeight: '14px'}} /></div>
                <div className="form-group">
                  <div className="d-flex justify-content-between">
                    <div className="form-check form-check-inline" id="form-check-rememberMe"><input className="form-check-input" type="checkbox" id="formCheck-1" htmlFor="remember" style={{cursor: 'pointer'}} name="check" /><label className="form-check-label" htmlFor="formCheck-1"><span className="label-text" style={{color: 'rgb(0,0,0)', fontSize: '14px'}}>Remember Me</span></label></div>
                    <a href="#" style={{fontSize: '14px'}}>Forgot Password</a>
                  </div>
                </div><button className="btn btn-primary btn-block" type="button">Sign Up</button>
                <div id="login-box-footer" style={{padding: '10px 20px', paddingBottom: '23px', paddingTop: '18px'}}>
                  <p style={{marginBottom: '0px', fontSize: '14px'}}>Already have an account?<a href="login.html" style={{fontSize: '14px', paddingRight: '8px', paddingLeft: '8px'}}>Log in!</a></p>
                </div>
              </form>
            </div>
          </section>
        </section>
      </main>
    )
  }
}

export default SignUpPage
