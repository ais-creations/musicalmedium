import React, {Component} from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import ProfilePopup from "../reusables/ProfilePopup";
import axios from "axios";
import {Spinner} from "reactstrap";

class ProfilePage extends Component {

  constructor(props) {
    super(props);

    this.togglePopup = this.togglePopup.bind(this);
    this.formSubmit = this.formSubmit.bind(this);

    this.state = {
      loading: true,
      user: {},
      showPopup: false,
    }
  }

  componentDidMount() {
    const { user } = this.props.auth;
    axios.get('users/' + user.id)
      .then(res => this.setState(() => ({
        user: res.data,
        loading: false
      })))
      .catch(err => console.log(err));
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
    if (this.state.loading) {
      return (
        <main className="page">
          <section className="clean-block about-us">
            <div className="container" style={{ textAlign: 'center' }}>
              <Spinner style={{ marginTop: '10%', marginBottom: '50%' }} size="sm" color="primary"/>
            </div>
          </section>
        </main>
      )
    }
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
                     src={this.state.user.imgSrc} height="150px"/>
                <h3 style={{ marginTop: '10px' }}>{this.state.user.name} || {this.state.user.jobTitle}</h3>
                <p style={{ padding: '20px', paddingBottom: 0, paddingTop: '5px' }}>{this.state.user.description}</p>
              </div>
              <div className="icons">
                <a href="#" style={{ padding: '0px', paddingRight: '5px', paddingLeft: '5px' }}>
                  <i className="icon-social-facebook"/>
                </a>
                <a href="#">
                  <i className="icon-social-instagram" style={{ paddingRight: '5px', paddingLeft: '5px' }}/>
                </a>
                <a href="#">
                  <i className="icon-social-twitter" style={{ paddingRight: '5px', paddingLeft: '5px' }}/>
                </a>
              </div>
              <div style={{marginTop: '10px'}}>
                <div className="tags2">
                  {this.state.user.keywords.filter(v => v !== "").map(keyword => (
                    <div className="tag2">{keyword}</div>
                  ))}
                </div>
              </div>
              <button className="btn btn-info" onClick={this.togglePopup} type="button"
                      style={{ marginTop: '10px', marginBottom: '20px' }}>
                Edit Profile
              </button>
            </div>
          </div>
        </section>
        {this.state.showPopup ?
          <ProfilePopup user={this.state.user} formSubmit={this.formSubmit} closePopup={this.togglePopup}/> : null}
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

