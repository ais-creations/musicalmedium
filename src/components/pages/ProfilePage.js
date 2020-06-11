import React, {Component} from 'react'

class ProfilePage extends Component {
  render() {
    return (
      <main className="page">
        <section className="clean-block about-us">
          <div className="container">
            <div className="text-center profile-card" style={{ margin: '15px', backgroundColor: '#ffffff' }}>
              <div className="profile-card-img" style={{
                backgroundImage: 'url(' + require("../../assets/img/close-up-photo-of-person-playing-piano-1246437.jpg") + ')',
                backgroundSize: 'cover'
              }}/>
              <div>
                <img className="rounded-circle" style={{ marginTop: '-70px', border: '2px solid #cccccc' }}
                     src={require("../../assets/img/189315459.jpg")} height="150px"/>
                <h3 style={{ marginTop: '10px' }}>Radostin Petrov</h3>
                <p style={{ padding: '20px', paddingBottom: 0, paddingTop: '5px' }}>I am a Certified&nbsp;Classical
                  Guitarist, having taught at the Royal College of Music for 4 years. I have been teaching students
                  remotely for the past 3 months. I am very passionate about music and teaching.</p>
              </div>
              <div className="icons"><a href="#" style={{ padding: '0px', paddingRight: '5px', paddingLeft: '5px' }}>
                <i className="icon-social-facebook"/></a>
                <a href="#">
                  <i className="icon-social-instagram" style={{ paddingRight: '5px', paddingLeft: '5px' }}/>
                </a>
                <a href="#">
                  <i className="icon-social-twitter" style={{ paddingRight: '5px', paddingLeft: '5px' }}/>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default ProfilePage
