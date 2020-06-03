import React, {Component} from 'react'
import { Redirect } from 'react-router';

class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }

  }
  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to='/login' />
    }
    return (
      <div><h1>Home Page</h1></div>
    )
  }
}

export default Home