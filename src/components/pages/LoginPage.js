import React, {Component} from 'react'
import Login from "../reusables/LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <main className="page contact-us-page">
        <section className="clean-block clean-form dark">
          <Login/>
        </section>
      </main>
    )
  }
}

export default LoginPage
