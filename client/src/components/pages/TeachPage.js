import React, {Component} from "react";
import {Spinner} from "reactstrap";
import UserPostCard from "../reusables/UserPostCard";
import PostCard from "../reusables/PostCard";
import axios from "axios";
import baseData from "../../reducers/baseData";

class TeachPage extends Component {
  constructor(props) {
    super(props);

    this.reloadPostData = this.reloadPostData.bind(this);

    this.state = {
      posts: {},
      postsLoading: true,
      userID: ""
    };
  }

  componentDidMount() {
    if (this.state.postsLoading) {
      this.reloadPostData();
    }
  }

  contact(userID) {
  }

  reloadPostData() {
    this.setState({
      postsLoading: true
    })
    axios.get('learnPosts/').then(res => this.setState({
      postsLoading: false,
      posts: res.data
    }));
    // localStorage.setItem('learnPosts', JSON.stringify(this.state.learnPosts));
  }

  getPosts() {
    if (this.state.postsLoading) {
      return (
        <Spinner style={{marginBottom: '100%'}} size="sm" color="primary"/>
      )
    }
    let i = 0;
    return (
      <div>
        {Object.entries(this.state.posts).map(([key, post]) => {
          if (post.userID !== this.state.userID) {
            i++;
            return (
              <PostCard postKey={post._id} title={post.title} currency={post.currency} minBudget={post.minBudget}
                        maxBudget={post.maxBudget}
                        timeFrame="hour"
                        keywords={post.keywords.filter(v => v !== "")}
                        description={post.description}
                        buttonClick={this.contact.bind(this)} buttonText="Contact"/>
            )
          }
          return null;
        })}
        {i === 0 ? (<center style={{ paddingTop: "10px" }}>No currently active posts</center>) : null}
      </div>
    )
  }

  render() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || !userData.authenticated) {
      localStorage.setItem('userData', JSON.stringify(baseData));
      userData = JSON.parse(localStorage.getItem('userData'));
    }
    this.state.userID = userData.userID;

    return (
      <main className="page pricing-table-page">
        <section className="clean-block clean-pricing dark" style={{ backgroundColor: "rgb(255,255,255)" }}>
          <div className="container" style={{ paddingTop: "30px" }}>
            <div className="block-heading" style={{ marginBottom: "0px", paddingTop: "0px" }}>
              <h2 className="text-info" style={{ fontSize: "24px", marginBottom: "20px" }}>
                Find Jobs
              </h2>
            </div>
            <div className="search-container" style={{ display: "flex", marginBottom: "10px" }}>
              <i className="fa fa-search"
                 style={{ color: "rgb(0,0,0)", marginTop: "10px", marginRight: "10px", marginLeft: "-10px", }}/>
              <input
                type="text"
                className="form-control"
                name="search-bar"
                placeholder="Search..."
                style={{ marginTop: 0, marginRight: "0px" }}
              />
              <button className="btn btn-primary btn-light" type="button" style={{ marginLeft: "3px" }}>
                Search
              </button>
            </div>
            <div style={{ textAlign: (this.state.postsLoading ? 'center' : 'left') }}>
              {this.getPosts()}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default TeachPage;
