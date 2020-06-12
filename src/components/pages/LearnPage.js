import React, {Component} from 'react'
import ProfileCard from "../reusables/ProfileCard";
import UserPostCard from "../reusables/UserPostCard";
import Popup from "../reusables/Popup";

class LearnPage extends Component {
  constructor(props) {
    super(props);

    this.togglePopup = this.togglePopup.bind(this);
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <main className="page">
        <section className="clean-block features">
          <div className="container" style={{ paddingTop: '30px' }}>
            <div>
              <div className="post-holder" style={{ marginRight: 0, marginBottom: '15px' }}>
                <button className="btn btn-primary" onClick={this.togglePopup}
                        type="button" style={{ margin: 0, marginBottom: 0 }}>Post
                  Requirement
                </button>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <div className="block-heading" style={{ marginBottom: '0px', paddingTop: '0px' }}>
                  <h2 className="text-info" style={{ fontSize: '24px', marginBottom: '0px' }}>Active Posts</h2>
                </div>

                {/* This is for putting a post in active posts */}
                {/*<UserPostCard title="Singing teacher wanted for Bass Vocals" currency="$" minBudget="10" maxBudget="15"*/}
                {/*              timeFrame="hour"*/}
                {/*              keywords={["Vocals", "Pop", "Bass"]}*/}
                {/*              description="I am a Rock Guitarist keen to improve my singing skills and start a band.*/}
                {/*               Would ideally like hourly lessons thrice a week"*/}
                {/*/>*/}
              </div>
            </div>

            <div className="block-heading" style={{ marginBottom: '0px', paddingTop: '0px' }}>
              <h2 className="text-info" style={{ fontSize: '24px', marginBottom: '20px' }}>Find Mentors</h2>
            </div>

            {/*Search Bar*/}
            <div className="search-container" style={{ display: 'flex', marginBottom: '10px' }}><i
              className="fa fa-search"
              style={{ color: 'rgb(0,0,0)', marginTop: '10px', marginRight: '10px', marginLeft: '-10px' }}/><input
              type="text" className="form-control" name="search-bar" placeholder="Search..."
              style={{ marginTop: 0, marginRight: '0px' }}/>
              <button className="btn btn-primary btn-light" type="button" style={{ marginLeft: '3px' }}>Search</button>
            </div>

            <ProfileCard name="Radostin Petrov" rating="4.7" title="Classical Guitarist" years="5"
                         keywords={["Guitarist", "Classical", "Professional"]}
                         src={require("../../assets/img/189315459.jpg")}
                         description="I am a Certified Classical Guitarist, having taught at the Royal College of Music
                  for 4 years. I have been teaching students remotely for the past 3 months. I am..."
            />
            <ProfileCard name="Indip Niroula" rating="5.0" title="Tenor Vocalist" years="15"
                         keywords={["Vocalist", "Tenor", "Pianist", "Trinity Music", "GOAT"]}
                         src={require("../../assets/img/273509.jpg")}
                         description="I am a Tenor singer and pianist with a passion for teaching.
                  I have been teaching music for 15 years. I have experience teaching students taking grades 1
                  through... "
            />
          </div>
        </section>
        {this.state.showPopup ? <Popup closePopup={this.togglePopup.bind(this)}/> : null}
      </main>
    )
  }
}

export default LearnPage