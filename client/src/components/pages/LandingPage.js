import React, {Component} from 'react'
import {Link} from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <main className="page landing-page">
        <section className="clean-block clean-hero" style={{
          backgroundImage: 'url(' + require("../../assets/img/person-playing-sun-burst-electric-bass-guitar-in-bokeh-96380.jpg") + ')',
          color: 'rgba(44,49,61,0.85)'
        }}>
          <div className="text">
            <h2>Connecting musicians around the world</h2>
            <p>Treble is a platform that allows all musicians find or become musical mentors</p>
            {/*<button onClick={window.scrollTo(0, 100)} className="btn btn-outline-light btn-lg" type="button">Learn More</button>*/}
          </div>
        </section>
        {/*<section className="clean-block clean-info dark">*/}
        {/*  <div className="container">*/}
        {/*    <div className="block-heading">*/}
        {/*      <h2 className="text-info">Info</h2>*/}
        {/*      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in,*/}
        {/*        mattis vitae leo.</p>*/}
        {/*    </div>*/}
        {/*    <div className="row align-items-center">*/}
        {/*      <div className="col-md-6"><img className="img-thumbnail"*/}
        {/*                                     src={require("../../assets/img/scenery/image5.jpg")}/></div>*/}
        {/*      <div className="col-md-6">*/}
        {/*        <h3>Lorem impsum dolor sit amet</h3>*/}
        {/*        <div className="getting-started-info">*/}
        {/*          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur*/}
        {/*            adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>*/}
        {/*        </div>*/}
        {/*        /!*<button className="btn btn-outline-primary btn-lg" type="button">Join Now</button>*!/*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*<section className="clean-block features">*/}
        {/*  <div className="container">*/}
        {/*    <div className="block-heading">*/}
        {/*      <h2 className="text-info">Features</h2>*/}
        {/*      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in,*/}
        {/*        mattis vitae leo.</p>*/}
        {/*    </div>*/}
        {/*    <div className="row align-items-center">*/}
        {/*      <div className="col-md-6"><img className="img-thumbnail"*/}
        {/*                                     src={require("../../assets/img/scenery/image5.jpg")}/></div>*/}
        {/*      <div className="col-md-6">*/}
        {/*        <h3>Lorem impsum dolor sit amet</h3>*/}
        {/*        <div className="getting-started-info">*/}
        {/*          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur*/}
        {/*            adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>*/}
        {/*        </div>*/}
        {/*        /!*<button className="btn btn-outline-primary btn-lg" type="button">Join Now</button>*!/*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
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
                    Find the perfect teacher to suit your
                    needs, or sign up and post your needs so teachers can find you!
                    All you have to do is sign up and get posting. Click 'write a post' to create your first post.
                  </p>
                </div>
                <Link to={'/learn'}>
                  <button
                    className="btn btn-outline-primary btn-lg"
                    type="button"
                  >
                    Find teachers
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block features">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">
                Home to musicians of all backgrounds and disciplines
              </h2>
              <p>Engage with a diverse community of musicians! </p>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <h3>Discover Jobs and Opportunities in the community</h3>
                <div className="getting-started-info">
                  <p>Search from a wide range of jobs provided by people from around the world</p>
                </div>
                <Link to={'/teach'}>
                  <button
                    className="btn btn-outline-primary btn-lg"
                    type="button" style={{marginBottom: '10px'}}
                  >
                    Find Work
                  </button>
                </Link>
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
    )
  }
}

export default LandingPage