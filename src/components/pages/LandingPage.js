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
                Search for mentors in a field of your choice or take on students
                yourself on our easy to use platform.
              </p>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  className="img-thumbnail"
                  src={require("../../assets/img/jon-tyson-9b6yj0m2WVA-unsplash.jpg")}
                />
              </div>
              <div className="col-md-6">
                <h3>Home to musicians of all backgrounds and disciplines</h3>
                <div className="getting-started-info">
                  <p>Engage with a diverse community of musicians today! </p>
                </div>
                <button
                  className="btn btn-outline-primary btn-lg"
                  type="button"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default LandingPage;
