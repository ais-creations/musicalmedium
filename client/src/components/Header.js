import React, {Component} from "react";
import {Collapse, DropdownItem, DropdownMenu, DropdownToggle, NavbarToggler, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../actions/authActions";
import baseData from "../reducers/baseData";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
    this.state = {
      isOpen: false,
      name: {}
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleClose() {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false
      });
    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  logoutClick = e => {
    localStorage.setItem('userData', JSON.stringify(baseData));
    this.onLogoutClick(e);
    this.toggle();
    window.location.reload(false);
  }

  choiceSignUpWide(isAuthenticated) {
    if (!isAuthenticated) {
      return (
        <Link to='/signup' className="signupwide">
          <button className="btn btn-primary" type="button">
            Sign Up
          </button>
        </Link>
      )
    }
    return null
  }

  choiceSignUpTall(isAuthenticated) {
    if (!isAuthenticated) {
      return (
        <Link to="/signup" className="signuptall">
          <button className="btn btn-primary" type="button" style={{ marginLeft: '0px', marginRight: '10px' }}>
            Sign Up
          </button>
        </Link>
      )
    }
    return null
  }

  choiceChat(isAuthenticated) {
    if (isAuthenticated) {
      return (
        <li className="nav-item" role="presentation">
          <Link to="/chat" className="nav-link">
            <i className="fas fa-comment-alt"/>
            &nbsp;CHAT
          </Link>
        </li>
      )
    }
    return null
  }

  choiceLoginProfile(isAuthenticated) {
    if (!isAuthenticated) {
      return (
        <li className="nav-item" role="presentation">
          <Link to="/login" className="nav-link">
            <i className="fas fa-sign-in-alt"/>
            &nbsp;LOG IN
          </Link>
        </li>
      )
    } else {
      return (
        <div style={{ display: 'inherit' }}>
          <UncontrolledDropdown style={{ marginRight: '-5%' }} nav inNavbar className="dropdown">
            <DropdownToggle nav caret className="dropdown-toggle">
              <i className="far fa-user-circle"/>
              &nbsp;{this.state.name}
            </DropdownToggle>
            <DropdownMenu right className="dropdown-menu-md-left header-dropdown">
              <DropdownItem className="dropdown-item">
                <li className="nav-item" role="presentation">
                  <Link to="/profile" className="nav-link">
                    <i className="far fa-user"/>
                    &nbsp;PROFILE
                  </Link>
                </li>
              </DropdownItem>
              <DropdownItem className="dropdown-item">
                <Link onClick={this.logoutClick} to="/" className="nav-link">
                  <i className="fas fa-sign-in-alt"/>
                  &nbsp;LOG OUT
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    }
  }

  render() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || !userData.authenticated) {
      localStorage.setItem('userData', JSON.stringify(baseData));
      userData = JSON.parse(localStorage.getItem('userData'));
    }
    this.state.name = userData.firstname;

    return (
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container">
          <Link className="navbar-brand logo"
                style={{ color: 'rgba(0,0,0,0.9)', fontFamily: 'Montserrat, sans-serif' }}
                to={'/'}>
            Treble
          </Link>
          <div>
            {this.choiceSignUpTall(userData.authenticated)}
            <NavbarToggler onBlur={this.toggleClose} onClick={this.toggle}/>
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"/>
                  &nbsp;HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/learn" className="nav-link">
                  <i className="fas fa-spinner"/>
                  &nbsp;LEARN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/teach" className="nav-link">
                  <i className="fas fa-podcast"/>
                  &nbsp;WORK
                </Link>
              </li>

              {this.choiceLoginProfile(userData.authenticated)}
              {this.choiceChat(userData.authenticated)}
              {/*<li className="nav-item" role="presentation">*/}
              {/*  <Link onClick={this.toggle} to="/login" className="nav-link"><i className="fas fa-sign-in-alt"/>&nbsp;LOG IN</Link>*/}
              {/*</li>*/}
            </ul>
          </Collapse>
          {this.choiceSignUpWide(userData.authenticated)}
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
