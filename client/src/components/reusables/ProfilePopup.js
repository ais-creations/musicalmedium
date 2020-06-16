import React, {Component} from "react";
import axios from 'axios';
import baseData from "../../reducers/baseData";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";
import Redirect from "react-router-dom/es/Redirect";

class ProfilePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: "",
      description: "",
      yearsOfExperience: 0,
      educationLevel: "No Qualifications",
      rating: 0,
      imgSrc: "",
      keyword1: "",
      keyword2: "",
      keyword3: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.imgSrc === "") {
      this.setState({ imgSrc: "https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" })
    }

    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      jobTitle: this.state.jobTitle,
      description: this.state.description,
      yearsOfExperience: this.state.yearsOfExperience,
      educationLevel: this.state.educationLevel,
      rating: this.state.rating,
      imgSrc: this.state.imgSrc,
      keywords: []
    };

    // let learnPosts = localStorage.getItem('learnPosts').concat(learnPost);
    // localStorage.setItem('learnPosts', learnPosts);
    //
    // axios.post('/learnPosts/add', learnPost)
    //   .then(res => console.log(res.data))

    this.props.formSubmit();
    this.props.closePopup();
  };

  render() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || !userData.authenticated) {
      localStorage.setItem('userData', JSON.stringify(baseData));
      userData = JSON.parse(localStorage.getItem('userData'));
      return <Redirect to={'login'}/>
    }

    const { errors } = this.state;
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popup-header">
            <h2 className="text-info" style={{ fontSize: '20px', marginBottom: '0px' }}>Post</h2>
            <button className="btn btn-danger btn-popup-close" onClick={this.props.closePopup}>X</button>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"><label htmlFor="email" style={{ fontSize: '14px' }}>Title</label>
              <input onChange={this.onChange}
                     value={this.state.title}
                     className="form-control item" maxLength="72"
                     type="text" id="jobTitle" style={{ fontSize: '14px' }}/>
            </div>
            <div className="form-group"><label htmlFor="email" style={{ fontSize: '14px' }}>Profile Description</label>
              <textarea onChange={this.onChange}
                        value={this.state.description} maxLength="512"
                        className={"form-control"} id="description" style={{ fontSize: '14px', height: 'auto' }}/>
            </div>
            <div style={{ display: 'flex' }}>
              <div className="form-group" style={{ marginRight: "5px", width: '100%' }}>
                <label htmlFor="email" style={{ fontSize: '14px' }}>Experience (years)</label>
                <input onChange={this.onChange}
                       value={this.state.yearsOfExperience}
                       className="form-control item" min="0" max="70"
                       type="number" id="yearsOfExperience" style={{ fontSize: '14px' }}/>
              </div>
              <div className="form-group" style={{ paddingLeft: "5px", marginRight: "5px", width: '100%' }}>
                <label htmlFor="email" style={{ fontSize: '14px' }}>Qualifications</label>
                <select onChange={this.onChange} value={this.state.educationLevel} className={"form-control item"}
                        id="educationLevel" style={{ fontSize: '14px', padding: '0px' }}>
                  <option value="No Qualifications" selected>No Qualifications</option>
                  <option value="Degree">Degree</option>
                  <option value="Diploma">Diploma or Equivalent</option>
                </select>
              </div>
              <div className="form-group" style={{ paddingLeft: "5px", width: '100%' }}>
                <label htmlFor="email" style={{ fontSize: '14px' }}>Rating</label>
                <input onChange={this.onChange}
                       value={this.state.rating}
                       className="form-control item" min="0" max="5"
                       type="number" id="rating" style={{ fontSize: '14px' }}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{ fontSize: '14px' }}>Tags</label>
              <div style={{ display: 'flex' }}>
                <input onChange={this.onChange} value={this.state.keyword1}
                       className={"form-control item"} maxLength="20"
                       id="keyword1" style={{ fontSize: '12px', marginRight: '10px' }}/>
                <input onChange={this.onChange} value={this.state.keyword2}
                       className={"form-control item"} maxLength="20"
                       id="keyword2" style={{ fontSize: '12px', marginRight: '10px' }}/>
                <input onChange={this.onChange} value={this.state.keyword3}
                       className={"form-control item"} maxLength="20"
                       id="keyword3" style={{ fontSize: '14px' }}/>
              </div>
            </div>
            <div className="form-group" style={{ marginRight: "5px" }}>
              <label htmlFor="email" style={{ fontSize: '14px' }}>Profile Image</label>
              <input onChange={this.onChange}
                     value={this.state.imgSrc}
                     className="form-control item"
                     type="text" id="imgSrc" style={{ fontSize: '14px' }}/>
            </div>
            <button className="btn btn-success btn-block" type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }
}


ProfilePopup.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,

});

export default connect(
  mapStateToProps
)(ProfilePopup);
