import React, {Component, useState} from "react";
import {Collapse, DropdownItem, DropdownMenu, DropdownToggle, NavbarToggler, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../actions/authActions";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
    this.state = {
      isOpen: false,
      user: {}
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
    this.onLogoutClick(e);
    this.toggle();
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

  choiceLoginLogout(isAuthenticated) {
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
        <UncontrolledDropdown nav inNavbar className="dropdown">
          <DropdownToggle nav caret className="dropdown-toggle">
            <i className="far fa-user-circle"/>
            &nbsp;{this.state.user.name}
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
      )
    }
  }

  render() {
    const { user } = this.props.auth;
    axios.get('http://localhost:4000/users/' + user.id)
      .then(res => this.setState(() => ({ user: res.data })))
      .catch(err => console.log(err));
    const { isAuthenticated } = this.props.auth;

    return (
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container">
          <Link className="navbar-brand logo"
                style={{ color: 'rgba(0,0,0,0.9)', fontFamily: 'Montserrat, sans-serif' }}
                to={'/'}>
            Treble
          </Link>
          <div>
            {this.choiceSignUpTall(isAuthenticated)}
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
                  &nbsp;TEACH
                </Link>
              </li>

              {this.choiceLoginLogout(isAuthenticated)}
              {/*<li className="nav-item" role="presentation">*/}
              {/*  <Link onClick={this.toggle} to="/login" className="nav-link"><i className="fas fa-sign-in-alt"/>&nbsp;LOG IN</Link>*/}
              {/*</li>*/}
            </ul>
          </Collapse>
          {this.choiceSignUpWide(isAuthenticated)}
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
