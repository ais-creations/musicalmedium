import React, {Component} from "react";
import classnames from "classnames";
import {Link} from "react-router-dom";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      toDashboard: false
    };
  }

  render() {
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
              <label htmlFor="email" style={{ fontSize: '14px' }}>Description</label>
              <textarea onChange={this.onChange} value={this.state.email}
                     className={classnames("form-control item", { invalid: errors.email || errors.emailnotfound })}
                     type="text" id="email" style={{ fontSize: '14px' }}/>
              <span className="error-text">{errors.email}{errors.emailnotfound}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{ fontSize: '14px' }}>Email</label>
              <input onChange={this.onChange} value={this.state.email}
                     className={classnames("form-control item", { invalid: errors.email || errors.emailnotfound })}
                     type="text" id="email" style={{ fontSize: '14px' }}/>
              <span className="error-text">{errors.email}{errors.emailnotfound}</span>
            </div>
            <button className="btn btn-success btn-block" type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Popup;