import React, {Component} from "react";
import axios from 'axios';
import baseData from "../../reducers/baseData";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";
import Redirect from "react-router-dom/es/Redirect";
import {Spinner} from "reactstrap";

class ProfilePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      name: this.props.user.name,
      jobTitle: this.props.user.jobTitle,
      description: this.props.user.description,
      yearsOfExperience: this.props.user.yearsOfExperience,
      educationLevel: this.props.user.educationLevel,
      rating: this.props.user.rating,
      imgSrc: this.props.user.imgSrc,
      keyword1: this.props.user.keywords[0],
      keyword2: this.props.user.keywords[1],
      keyword3: this.props.user.keywords[2],
      errors: {}
    };

    if (this.props.user.contact !== null && this.props.user.contact.length > 2) {
      this.setState({
        contact1: this.props.user.contact[0],
        contact2: this.props.user.contact[1],
        contact3: this.props.user.contact[2],
      })
    } else {
      this.setState({
        contact1: "",
        contact2: "",
        contact3: "",
      })
    }
  }

  componentDidMount() {
    // axios.get('users/' + this.props.userID)
    //   .then(res => this.setState(() => ({
    //     userID: res.data.id,
    //     name: res.data.name,
    //     jobTitle: res.data.jobTitle,
    //     description: res.data.description,
    //     yearsOfExperience: res.data.yearsOfExperience,
    //     educationalLevel: res.data.educationalLevel,
    //     rating: res.data.rating,
    //     imgSrc: res.data.imgSrc,
    //     keyword1: res.data.keywords[0],
    //     keyword2: res.data.keywords[1],
    //     keyword3: res.data.keywords[2],
    //     loading: false
    //   })))
    //   .catch(err => console.log(err));
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.imgSrc === "") {
      this.setState({ imgSrc: "https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" })
    }

    // const localData = {
    //   authenticated: true,
    //   userID: this.state.userID,
    //   firstname: this.state.name.split(" ")[0],
    //   name: this.state.name,
    //   bio: this.state.description,
    //   jobTitle: this.state.jobTitle,
    //   imgSrc: this.state.imgSrc,
    //   profile: {},
    // }
    //
    // localStorage.setItem('userData', JSON.stringify(localData));

    const userData = {
      name: this.state.name,
      jobTitle: this.state.jobTitle,
      description: this.state.description,
      yearsOfExperience: this.state.yearsOfExperience,
      educationLevel: this.state.educationLevel,
      rating: this.state.rating,
      imgSrc: this.state.imgSrc,
      keywords: [this.state.keyword1, this.state.keyword2, this.state.keyword3],
      contact: [this.state.contact1, this.state.contact2, this.state.contact3]
    };

    axios.post('users/update/' + this.props.userID, userData)
      .then(res => res).catch(err => console.log(err));

    // let learnPosts = localStorage.getItem('learnPosts').concat(learnPost);
    // localStorage.setItem('learnPosts', learnPosts);
    //
    // axios.post('/learnPosts/add', learnPost)
    //   .then(res => console.log(res.data))


    this.props.formSubmit(userData);
    this.props.closePopup();
  };

  render() {
    const { errors } = this.state;
    if (this.state.loading) {
      return (
        <div className="popup">
          <div className="popup_inner">
            <div className="popup-header">
              <h2 className="text-info" style={{ fontSize: '20px', marginBottom: '0px' }}>Post</h2>
              <button className="btn btn-danger btn-popup-close" onClick={this.props.closePopup}>X</button>
            </div>
            <div style={{textAlign: 'center'}}>
              <Spinner style={{ marginTop: '10px', marginBottom: '50%' }} size="sm" color="primary"/>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popup-header">
            <h2 className="text-info" style={{ fontSize: '20px', marginBottom: '0px' }}>Edit your Profile</h2>
            <button className="btn btn-danger btn-popup-close" onClick={this.props.closePopup}>X</button>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"><label htmlFor="email" style={{ fontSize: '14px' }}>Title</label>
              <input onChange={this.onChange}
                     value={this.state.jobTitle}
                     className="form-control item" maxLength="72"
                     type="text" id="jobTitle" style={{ fontSize: '14px' }}/>
            </div>
            <div className="form-group"><label htmlFor="email" style={{ fontSize: '14px' }}>Profile Description</label>
              <textarea onChange={this.onChange}
                        value={this.state.description} maxLength="512"
                        className={"form-control"} id="description" style={{ fontSize: '14px', height: 'auto' }}/>
            </div>
            {/*<div style={{ display: 'flex' }}>*/}
            {/*  <div className="form-group" style={{ marginRight: "5px", width: '100%' }}>*/}
            {/*    <label htmlFor="email" style={{ fontSize: '14px' }}>Experience (years)</label>*/}
            {/*    <input onChange={this.onChange}*/}
            {/*           value={this.state.yearsOfExperience}*/}
            {/*           className="form-control item" min="0" max="70"*/}
            {/*           type="number" id="yearsOfExperience" style={{ fontSize: '14px' }}/>*/}
            {/*  </div>*/}
            {/*  <div className="form-group" style={{ paddingLeft: "5px", marginRight: "5px", width: '100%' }}>*/}
            {/*    <label htmlFor="email" style={{ fontSize: '14px' }}>Qualifications</label>*/}
            {/*    <select onChange={this.onChange} value={this.state.educationLevel} className={"form-control item"}*/}
            {/*            id="educationLevel" style={{ fontSize: '14px', padding: '0px' }}>*/}
            {/*      <option value="No Qualifications" selected>No Qualifications</option>*/}
            {/*      <option value="Degree">Degree</option>*/}
            {/*      <option value="Diploma">Diploma or Equivalent</option>*/}
            {/*    </select>*/}
            {/*  </div>*/}
            {/*  <div className="form-group" style={{ paddingLeft: "5px", width: '100%' }}>*/}
            {/*    <label htmlFor="email" style={{ fontSize: '14px' }}>Rating</label>*/}
            {/*    <input onChange={this.onChange}*/}
            {/*           value={this.state.rating}*/}
            {/*           className="form-control item" min="0" max="5"*/}
            {/*           type="decimal" id="rating" style={{ fontSize: '14px' }}/>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="form-group">
              <label htmlFor="email" style={{ fontSize: '14px' }}>Contact Details (By Priority)</label>
              <div style={{ display: 'flex' }}>
                <input onChange={this.onChange} value={this.state.contact1} placeholder="ie. Mobile"
                       className={"form-control item"}
                       id="contact1" style={{ fontSize: '12px', marginRight: '10px' }}/>
                <input onChange={this.onChange} value={this.state.contact2}
                       className={"form-control item"}  placeholder="ie. Social Media"
                       id="contact2" style={{ fontSize: '12px', marginRight: '10px' }}/>
                <input onChange={this.onChange} value={this.state.contact3}
                       className={"form-control item"} placeholder="ie. Email"
                       id="contact3" style={{ fontSize: '12px' }}/>
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
                       id="keyword3" style={{ fontSize: '12px' }}/>
              </div>
            </div>
            <div className="form-group" style={{ marginRight: "5px" }}>
              <label htmlFor="email" style={{ fontSize: '14px' }}>Profile Image</label>
              <input onChange={this.onChange}
                     value={this.state.imgSrc}
                     className="form-control item"
                     type="text" id="imgSrc" style={{ fontSize: '14px' }}/>
            </div>
            <button className="btn btn-success btn-block" type="submit">Save Changes</button>
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
