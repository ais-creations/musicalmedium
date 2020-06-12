import React, {Component} from 'react'
import axios from 'axios'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    axios.get('http://localhost:4000/users/'+ user.id)
        .then(res => this.setState(() => ({user: res.data})))
        .catch(err => console.log(err));

    return (
      <main className="page">
        <section className="clean-block about-us">
          <div className="container">
            <div className="text-center profile-card" style={{ margin: '15px', backgroundColor: '#ffffff' }}>
              <div className="profile-card-img" style={{
                backgroundImage: 'url(' + require("../../assets/img/close-up-photo-of-person-playing-piano-1246437.jpg") + ')',
                backgroundSize: 'cover'
              }}/>
              <div>
                <img className="rounded-circle" style={{ marginTop: '-70px', border: '2px solid #cccccc' }}
                     src={require("../../assets/img/189315459.jpg")} height="150px"/>
                <h3 style={{ marginTop: '10px' }}>{this.state.user.name}</h3>
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
            </div>
            <div style={{ height: "75vh" }} className="container valign-wrapper">
              <div className="row">
                <div className="col s12 center-align">
                  <h4>
                  </h4>
                  <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                      }}
                      onClick={this.onLogoutClick}
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
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

