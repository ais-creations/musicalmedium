import React, {Component} from 'react'
import {Link} from "react-router-dom";

class ChatPage extends Component {
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
                        <Link to={'/'}><button className="btn btn-outline-light btn-lg" type="button">Learn More</button></Link>
                    </div>
                </section>
            </main>
        )
    }
}

export default LandingPage