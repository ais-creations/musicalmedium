import React, {Component} from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import baseData from "../../reducers/baseData";
import Popup from "../reusables/Popup";
import ProfilePopup from "../reusables/ProfilePopup";

class ProfilePage extends Component {

  constructor(props) {
    super(props);

    this.togglePopup = this.togglePopup.bind(this);
    this.formSubmit = this.formSubmit.bind(this);

    this.state = {
      user: {},
      name: "",
      showPopup: false
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  formSubmit() {
    this.render();
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || !userData.authenticated) {
      localStorage.setItem('userData', JSON.stringify(baseData));
      userData = JSON.parse(localStorage.getItem('userData'));
    }
    this.state.name = userData.name;

    return (
      <main className="page">
        <section className="clean-block about-us">
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="text-center box-shadow rounded-lg"
                 style={{ margin: '15px', backgroundColor: '#ffffff' }}>
              <div className="profile-card-img" style={{
                backgroundImage: 'url(' + require("../../assets/img/close-up-photo-of-person-playing-piano-1246437.jpg") + ')',
                backgroundSize: 'cover'
              }}/>
              <div>
                <img className="rounded-circle" style={{ marginTop: '-70px', border: '2px solid #cccccc' }}
                     src={require("../../assets/img/189315459.jpg")} height="150px"/>
                <h3 style={{ marginTop: '10px' }}>{this.state.name}</h3>
                <p style={{ padding: '20px', paddingBottom: 0, paddingTop: '5px' }}>I am a Certified&nbsp;Classical
                  Guitarist, having taught at the Royal College of Music for 4 years. I have been teaching students
                  remotely for the past 3 months. I am very passionate about music and teaching.</p>
              </div>
              <div className="icons"><a href="#" style={{ padding: '0px', paddingRight: '5px', paddingLeft: '5px' }}>
                <i className="icon-social-facebook"/></a>
                <a href="#">
                  <i className="icon-social-instagram" style={{ paddingRight: '5px', paddingLeft: '5px' }}/>
                </a>
                <a href="#">
                  <i className="icon-social-twitter" style={{ paddingRight: '5px', paddingLeft: '5px' }}/>
                </a>
              </div>
              <button className="btn btn-info" onClick={this.togglePopup} type="button"
                      style={{ marginTop: '10px', marginBottom: '20px' }}>
                Edit Profile
              </button>
            </div>
          </div>
        </section>
        {this.state.showPopup ? <ProfilePopup formSubmit={this.formSubmit} closePopup={this.togglePopup}/> : null}
      </main>
    )
  }
}

ProfilePage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(ProfilePage);

