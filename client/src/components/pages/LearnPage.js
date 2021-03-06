import React, {Component} from 'react'
import ProfileCard from "../reusables/ProfileCard";
import UserPostCard from "../reusables/UserPostCard";
import Popup from "../reusables/Popup";
import axios from 'axios';
import {Spinner} from "reactstrap";
import baseData from "../../reducers/baseData";
import ContactPopup from "../reusables/ContactPopup";

class LearnPage extends Component {
  constructor(props) {
    super(props);

    this.togglePopup = this.togglePopup.bind(this);
    this.toggle = this.toggle.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.reloadPostData = this.reloadPostData.bind(this);
    this.reloadUserData = this.reloadUserData.bind(this);

    this.state = {
      learnPosts: {},
      users: {},
      postsLoading: true,
      usersLoading: true,
      showPopup: false,
      showPopup2: false,
      changed: false,
      userID: "",
      searchBox: "",
      searchQuery: "",
      contact: []
    };
  }

  componentDidMount() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || !userData.authenticated) {
      localStorage.setItem('userData', JSON.stringify(baseData));
      userData = JSON.parse(localStorage.getItem('userData'));
    }
    this.setState({
      userID: userData.userID
    })
    if (this.state.postsLoading) {
      this.reloadPostData();
    }
    if (this.state.usersLoading) {
      this.reloadUserData();
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };


  formSubmit() {
    // this.reloadUserData();
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  toggle(contact) {
    this.setState({
      contact: contact,
      showPopup2: !this.state.showPopup2
    });
  }

  reloadPostData() {
    // this.setState({
    //   postsLoading: true
    // })

    axios.get('learnPosts/').then(res => this.setState({
      postsLoading: false,
      learnPosts: res.data
    }));
    // localStorage.setItem('learnPosts', JSON.stringify(this.state.learnPosts));
  }

  reloadUserData() {
    if (this.state.searchBox != null) {
      this.setState({
        searchQuery: this.state.searchBox
      })
    }
    // this.setState({
    //   usersLoading: true
    // })
    axios.get('users/').then(res => this.setState({
      usersLoading: false,
      users: res.data
    }));
    // localStorage.setItem('learnPosts', JSON.stringify(this.state.learnPosts));
  }

  getPosts() {
    if (this.state.postsLoading) {
      return (
        <Spinner style={{ marginTop: '10px' }} size="sm" color="primary"/>
      )
    }
    let i = 0;
    console.log(this.state.learnPosts);
    return (
      <div>
        {
          Object.entries(this.state.learnPosts).map(([key, post]) => {
            console.log(key, post);
            if (post.userID === this.state.userID) {
              i++;
              const keywords = post.keywords;
              return (
                <UserPostCard postKey={post._id} title={post.title} currency={post.currency} minBudget={post.minBudget}
                              maxBudget={post.maxBudget}
                              timeFrame="hour"
                              keywords={keywords.filter(v => v !== "")}
                              description={post.description}/>
              )
            }
            return null;
          })}
        {i === 0 ? (<center style={{ paddingTop: "10px" }}>No currently active posts</center>) : null}
      </div>
    )
  }

  getUsers() {
    if (this.state.usersLoading) {
      return (
        <Spinner style={{ marginTop: '10px', marginBottom: '50%' }} size="sm" color="primary"/>
      )
    }
    let i = 0;
    console.log(this.state.users);
    return (
      <div>
        {Object.entries(this.state.users).map(([key, user]) => {
          if (user._id !== this.state.userID
            && (user.name.toLowerCase().includes(this.state.searchQuery)
              || user.keywords[0].toLowerCase().includes(this.state.searchQuery)
              || user.keywords[1].toLowerCase().includes(this.state.searchQuery)
              || user.keywords[2].toLowerCase().includes(this.state.searchQuery)
            )) {
            i++;
            return (
              <ProfileCard name={user.name} rating={user.rating} title={user.jobTitle} years={user.yearsOfExperience}
                           keywords={user.keywords.filter(v => v !== "")}
                           contact={(user.contact === null ? [] : user.contact.filter(v => v !== ""))}
                           toggle={this.toggle}
                           src={user.imgSrc}
                           description={user.description}
              />
            )
          }
          return null;
        })}
        {i === 0 ? (<center style={{ paddingTop: "10px", marginBottom: "50%" }}>Couldn't find
          "{this.state.searchQuery}"</center>) : null}
      </div>
    )
  }

  render() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || !userData.authenticated) {
      localStorage.setItem('userData', JSON.stringify(baseData));
      userData = JSON.parse(localStorage.getItem('userData'));
    }
    const isAuthenticated = userData.authenticated

    return (
      <main className="page">
        <section className="clean-block features">
          <div className="container" style={{ paddingTop: '30px' }}>
            <div style={{
              display: (isAuthenticated ? 'inherit' : 'none'),
              textAlign: (this.state.postsLoading ? 'center' : 'left')
            }}>
              <div className="post-holder" style={{ marginRight: 0, marginBottom: '15px' }}>
                <button className="btn btn-primary" onClick={this.togglePopup}
                        type="button" style={{ margin: 0, marginBottom: 0 }}>
                  Write a Post
                </button>
                <button className="btn btn-info" onClick={this.reloadPostData}
                        type="button" style={{ position: 'absolute', right: '10%', width: '40px' }}>
                  <i style={{ fontSize: '14px' }} className="fas fa-sync-alt"/>
                </button>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <div className="block-heading" style={{ marginBottom: '0px', paddingTop: '0px' }}>
                  <h2 className="text-info" style={{ fontSize: '24px', marginBottom: '0px' }}>Active Posts</h2>
                </div>


                {/* This is for putting a post in active posts */}
                {this.getPosts()}
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
              style={{ color: 'rgb(0,0,0)', marginTop: '10px', marginRight: '10px', marginLeft: '-10px' }}/>
              <input type="input" className="form-control" name="search-bar" placeholder="Search..."
                     style={{ marginTop: 0, marginRight: '0px' }} onChange={this.onChange} id="searchBox"
                     value={this.state.searchBox}/>
              <button className="btn btn-primary btn-light"
                      onClick={this.reloadUserData}
                      type="submit" style={{ marginLeft: '3px' }}>Search
              </button>
            </div>

            {/*<ProfileCard name="Radostin Petrov" rating="4.7" title="Classical Guitarist" years="5"*/}
            {/*             keywords={["Guitarist", "Classical", "Professional"]}*/}
            {/*             src={require("../../assets/img/189315459.jpg")}*/}
            {/*             description="I am a Certified Classical Guitarist, having taught at the Royal College of Music*/}
            {/*      for 4 years. I have been teaching students remotely for the past 3 months. I am..."*/}
            {/*/>*/}
            {/*<ProfileCard name="Indip Niroula" rating={5.0} title="Tenor Vocalist" years="15"*/}
            {/*             keywords={["Vocalist", "Tenor", "Pianist", "Trinity Music", "GOAT"]}*/}
            {/*             src={require("../../assets/img/273509.jpg")}*/}
            {/*             description="I am a Tenor singer and pianist with a passion for teaching.*/}
            {/*      I have been teaching music for 15 years. I have experience teaching students taking grades 1*/}
            {/*      through... "*/}
            {/*/>*/}
            <div style={{ textAlign: (this.state.usersLoading ? 'center' : 'left') }}>
              {this.getUsers()}
            </div>
          </div>
        </section>
        {this.state.showPopup ? <Popup formSubmit={this.formSubmit} closePopup={this.togglePopup}/> : null}
        {this.state.showPopup2 ? <ContactPopup contact={this.state.contact} closePopup={this.toggle}/> : null}
      </main>
    )
  }
}

export default LearnPage