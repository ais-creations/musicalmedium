import React, {Component} from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container"><a className="navbar-brand logo" href="#" style={{
          color: 'rgba(255,255,255,0.9)',
          fontFamily: 'Montserrat, sans-serif'
        }}>Treble</a>
          <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span
            className="navbar-toggler-icon"/></button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item" role="presentation"><a className="nav-link active" href="index.html"><i
                className="fas fa-home"/>&nbsp;HOME</a></li>
              <li className="nav-item" role="presentation"><a className="nav-link" href="features.html"><i
                className="fas fa-spinner"/>&nbsp;LEARN</a></li>
              <li className="nav-item" role="presentation"><a className="nav-link" href="pricing.html"><i
                className="fas fa-podcast"/>&nbsp;TEACH</a></li>
              <li className="nav-item" role="presentation"><a className="nav-link" href="profile.html"><i
                className="far fa-user-circle"/>&nbsp;PROFILE</a></li>
              <li className="nav-item" role="presentation"><a className="nav-link" href="login.html"><i
                className="fas fa-sign-in-alt"/>&nbsp;LOG IN</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header