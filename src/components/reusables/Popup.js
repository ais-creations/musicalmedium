import React, {Component} from "react";
import classnames from "classnames";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      budget: {
        currency: String,
        minBudget: Number,
        maxBudget: Number
      },
      errors: {}
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
              <label htmlFor="email" style={{ fontSize: '14px' }}>Title</label>
              <input onChange={this.onChange} value={this.state.email}
                     className={classnames("form-control item", { invalid: errors.email || errors.emailnotfound })}
                     id="title" style={{ fontSize: '14px' }}/>
              <span className="error-text">{errors.email}{errors.emailnotfound}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{ fontSize: '14px' }}>Description</label>
              <textarea onChange={this.onChange} value={this.state.email}
                        className={classnames("form-control item", { invalid: errors.email || errors.emailnotfound })}
                        id="description" style={{ fontSize: '14px', height: '100px' }}/>
              <span className="error-text">{errors.email}{errors.emailnotfound}</span>
            </div>
            <div className="form-group">
              <div style={{ display: 'flex' }}>
                <label style={{ fontSize: '14px', marginRight: '20px', paddingTop: '7px' }}>Budget</label>
                <label style={{ fontSize: '12px', paddingTop: '10px', marginRight: '5px' }}>Currency</label>
                <select onChange={this.onChange} value={this.state.email}
                        className={classnames("form-control item", { invalid: errors.email || errors.emailnotfound })}
                        id="currency" style={{ fontSize: '12px', marginRight: '10px', width: '50px', padding: '0px' }}>
                  <option value="£" selected>£</option>
                  <option value="$">$</option>
                  <option value="₹">₹</option>
                </select>
                <label style={{ fontSize: '12px', paddingTop: '10px', marginRight: '5px' }}>Min</label>
                <input onChange={this.onChange} value={this.state.email}
                       className={classnames("form-control item", { invalid: errors.email || errors.emailnotfound })}
                       type="number" id="minbudget" style={{ fontSize: '12px', marginRight: '10px' }}/>
                <label style={{ fontSize: '12px', paddingTop: '10px', marginRight: '5px' }}>Max</label>
                <input onChange={this.onChange} value={this.state.email}
                       className={classnames("form-control item", { invalid: errors.email || errors.emailnotfound })}
                       type="number" id="maxbudget" style={{ fontSize: '12px' }}/>
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{ fontSize: '14px' }}>Tags</label>
                <div style={{ display: 'flex' }}>
                  <input onChange={this.onChange} value={this.state.email}
                         className={classnames("form-control item", { invalid: errors.email || errors.emailnotfound })}
                         id="tag1" style={{ fontSize: '12px', marginRight: '10px' }}/>
                  <input onChange={this.onChange} value={this.state.email}
                         className={classnames("form-control item", { invalid: errors.email || errors.emailnotfound })}
                         id="tag2" style={{ fontSize: '12px', marginRight: '10px' }}/>
                  <input onChange={this.onChange} value={this.state.email}
                         className={classnames("form-control item", { invalid: errors.email || errors.emailnotfound })}
                         id="tag3" style={{ fontSize: '14px' }}/>
                </div>
                <span className="error-text">{errors.email}{errors.emailnotfound}</span>
              </div>
            </div>
            <button className="btn btn-success btn-block" type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Popup;