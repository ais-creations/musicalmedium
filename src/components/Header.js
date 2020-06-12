import React, {Component, useState} from "react";
import {Collapse, NavbarToggler} from "reactstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../actions/authActions";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  logoutClick = e => {
    this.onLogoutClick(e);
    this.toggle();
  }

  choiceLoginLogout() {
    const { isAuthenticated } = this.props.auth;
    if (!isAuthenticated) {
      return (
      <li className="nav-item" role="presentation">
        <Link onClick={this.toggle} to="/login" className="nav-link"><i className="fas fa-sign-in-alt"/>&nbsp;LOG IN</Link>
      </li> )
    } else {
      return (
          <li className="nav-item" role="presentation">
            <Link onClick={this.logoutClick} to="/login" className="nav-link"><i className="fas fa-sign-in-alt"/>&nbsp;LOGOUT</Link>
          </li> )
    }
  }

  // signUpChoice() {
  //   const { isAuthenticated } = this.props.auth;
  //   if (!isAuthenticated) {
  //     return (
  //     <Link to='/signup' className="signupwide">
  //       <button className="btn btn-primary" type="button">
  //         Sign Up
  //       </button>
  //     </Link>
  //     )
  //   } else {
  //     return (<button>Hi Indip</button>)
  //   }
  // }

  render() {

    return (
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container"><a className="navbar-brand logo" href="#" style={{
          color: 'rgba(0,0,0,0.9)',
          fontFamily: 'Montserrat, sans-serif'
        }}><Link to={'/'}> Treble </Link></a>
          <div>
            <Link to="/signup" className="signuptall">
              <button className="btn btn-primary" type="button" style={{ marginLeft: '0px', marginRight: '10px' }}>
                Sign Up
              </button>
            </Link>
            <NavbarToggler onClick={this.toggle}/>
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item" role="presentation">
                <Link onClick={this.toggle} to="/" className="nav-link"><i className="fas fa-home"/>&nbsp;HOME</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link onClick={this.toggle} to="/learn" className="nav-link"><i className="fas fa-spinner"/>&nbsp;LEARN</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link onClick={this.toggle} to="/teach" className="nav-link"><i className="fas fa-podcast"/>&nbsp;TEACH</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link onClick={this.toggle} to="/profile" className="nav-link"><i className="far fa-user-circle"/>&nbsp;PROFILE</Link>
              </li>
              {this.choiceLoginLogout()}
              {/*<li className="nav-item" role="presentation">*/}
              {/*  <Link onClick={this.toggle} to="/login" className="nav-link"><i className="fas fa-sign-in-alt"/>&nbsp;LOG IN</Link>*/}
              {/*</li>*/}
            </ul>
          </Collapse>

          <Link to='/signup' className="signupwide">
            <button className="btn btn-primary" type="button">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Header);
