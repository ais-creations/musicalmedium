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
        <section className="clean-block clean-info dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Info</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in,
                mattis vitae leo.</p>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6"><img className="img-thumbnail"
                                             src={require("../../assets/img/scenery/image5.jpg")}/></div>
              <div className="col-md-6">
                <h3>Lorem impsum dolor sit amet</h3>
                <div className="getting-started-info">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                {/*<button className="btn btn-outline-primary btn-lg" type="button">Join Now</button>*/}
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block features">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Features</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in,
                mattis vitae leo.</p>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6"><img className="img-thumbnail"
                                             src={require("../../assets/img/scenery/image5.jpg")}/></div>
              <div className="col-md-6">
                <h3>Lorem impsum dolor sit amet</h3>
                <div className="getting-started-info">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                {/*<button className="btn btn-outline-primary btn-lg" type="button">Join Now</button>*/}
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default LandingPage