import React, {Component} from "react";
import axios from 'axios';
import classnames from "classnames";
import baseData from "../../reducers/baseData";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";
import Redirect from "react-router-dom/es/Redirect";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      keywords: new Array(3),
      currency: String,
      minBudget: Number,
      maxBudget: Number,
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const learnPost = {
      userID: JSON.parse(localStorage.getItem('userData')).userID,
      title: this.state.title,
      description: this.state.description,
      keywords: this.state.keywords,
      currency: this.state.currency,
      minBudget: this.state.minBudget,
      maxBudget: this.state.maxBudget
    };

    axios.post('/learnPosts/add', learnPost)
        .then(res => console.log(res.data))
    this.props.closePopup();
  };

  render() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || !userData.authenticated) {
      localStorage.setItem('userData', JSON.stringify(baseData));
      userData = JSON.parse(localStorage.getItem('userData'));
      return <Redirect to={'login'} />
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
            <div className="form-group">
              <label htmlFor="email" style={{ fontSize: '14px' }}>Title</label>
              <input onChange={this.onChange} value={this.state.title}
                     className={"form-control item"}
                     id="title" style={{ fontSize: '14px' }}/>
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{ fontSize: '14px' }}>Description</label>
              <textarea onChange={this.onChange} value={this.state.description}
                        className={"form-control item"}
                        id="description" style={{ fontSize: '14px', height: '100px'}}/>
            </div>
            <div className="form-group">
              <div style={{ display: 'flex' }}>
                <label style={{ fontSize: '14px', marginRight: '20px', paddingTop: '7px' }}>Budget</label>
                <label style={{ fontSize: '12px', paddingTop: '10px', marginRight: '5px' }}>Currency</label>
                <select onChange={this.onChange} value={this.state.currency}
                        className={"form-control item"}
                        id="currency" style={{ fontSize: '12px', marginRight: '10px', width: '50px', padding: '0px' }}>
                  <option value="£" selected>£</option>
                  <option value="$">$</option>
                  <option value="₹">₹</option>
                </select>
                <label style={{ fontSize: '12px', paddingTop: '10px', marginRight: '5px' }}>Min</label>
                <input onChange={this.onChange} value={this.state.minBudget}
                       className={"form-control item"}
                       type="number" id="minBudget" style={{ fontSize: '12px', marginRight: '10px' }}/>
                <label style={{ fontSize: '12px', paddingTop: '10px', marginRight: '5px' }}>Max</label>
                <input onChange={this.onChange} value={this.state.maxBudget}
                       className={"form-control item"}
                       type="number" id="maxBudget" style={{ fontSize: '12px' }}/>
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{ fontSize: '14px' }}>Tags</label>
                <div style={{ display: 'flex' }}>
                  <input onChange={this.onChange} value={this.state.keywords[0]}
                         className={"form-control item"}
                         id="keywords[0]" style={{ fontSize: '12px', marginRight: '10px' }}/>
                  <input onChange={this.onChange} value={this.state.keywords[1]}
                         className={"form-control item"}
                         id="keywords[1]" style={{ fontSize: '12px', marginRight: '10px' }}/>
                  <input onChange={this.onChange} value={this.state.keywords[2]}
                         className={"form-control item"}
                         id="keywords[2]" style={{ fontSize: '14px' }}/>
                </div>
              </div>
            </div>
            <button className="btn btn-success btn-block" type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }
}


Popup.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,

});

export default connect(
    mapStateToProps
)(Popup);
