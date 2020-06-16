import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <main className="page landing-page">
        <section
          className="clean-block clean-hero"
          style={{
            backgroundImage:
              "url(" +
              require("../../assets/img/person-playing-sun-burst-electric-bass-guitar-in-bokeh-96380.jpg") +
              ")",
            color: "rgba(44,49,61,0.85)",
          }}
        >
          <div className="text">
            <h2>Connecting musicians with one another</h2>
            <p>
              Treble is a platform that allows all musicians find or become
              online tutors
            </p>
            <button className="btn btn-outline-light btn-lg" type="button">
              Sign Up
            </button>
          </div>
        </section>
        <section className="clean-block clean-info dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Take your music to the next grade</h2>
              <p>
                Search for mentors in a field of your choice and elevate your
                skills to a new level.
              </p>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  className="img-thumbnail"
                  src={require("../../assets/img/man-playing-guitar-with-girl-3450887.jpg")}
                />
              </div>
              <div className="col-md-6">
                <h3>Find a mentor now!</h3>
                <div className="getting-started-info">
                  <p>
                    We guarantee you will find the perfect teacher to suit your
                    needs
                  </p>
                </div>
                <button
                  className="btn btn-outline-primary btn-lg"
                  type="button"
                >
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block clean-info dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">
                Home to musicians of all backgrounds and disciplines
              </h2>
              <p>Engage with a diverse community of musicians today! </p>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <h3> Start a conversation with every kind of musician</h3>
                <div className="getting-started-info">
                  <p />
                </div>
                <button
                  className="btn btn-outline-primary btn-lg"
                  type="button"
                >
                  Join Now
                </button>
              </div>
              <div className="col-md-6">
                <img
                  className="img-thumbnail"
                  src={require("../../assets/img/jon-tyson-9b6yj0m2WVA-unsplash.jpg")}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default LandingPage;
