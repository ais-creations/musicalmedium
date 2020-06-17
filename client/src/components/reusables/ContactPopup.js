import React, {Component} from "react";
import axios from 'axios';
import baseData from "../../reducers/baseData";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";
import Redirect from "react-router-dom/es/Redirect";

class ContactPopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popup-header">
            <h2 className="text-info" style={{ fontSize: '20px', marginBottom: '0px' }}>Contact Info</h2>
            <button className="btn btn-danger btn-popup-close" onClick={this.props.closePopup}>X</button>
          </div>
          <div style={{paddingTop: '20px', textAlign: 'center'}}>
            {this.props.contact.map(contact => (
              <h6>{contact}</h6>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPopup;
