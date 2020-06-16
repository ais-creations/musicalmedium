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
                        <h2>On Chat Page</h2>
                        <Link to={'/'}><button className="btn btn-outline-light btn-lg" type="button">Learn More</button></Link>
                    </div>
                </section>
            </main>
        )
    }
}

export default ChatPage