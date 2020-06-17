import React, {Component} from "react";
import {Spinner} from "reactstrap";
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
      userID: "",
      searchBox: "",
      searchQuery: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  componentDidMount() {
    if (this.state.postsLoading) {
      this.reloadPostData();
    }
  }

  contact(userID) {
  }

  reloadPostData() {
    if (this.state.searchBox != null) {
      this.setState({
        searchQuery: this.state.searchBox
      })
    }
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
        <Spinner style={{ marginBottom: '100%' }} size="sm" color="primary"/>
      )
    }
    let i = 0;
    console.log(this.state.posts);
    return (
      <div>
        {Object.entries(this.state.posts).map(([key, post]) => {
          const keywords = post.keywords;
          if (post.userID !== this.state.userID && (post.title.toLowerCase().includes(this.state.searchQuery)
            || post.keywords[0].toLowerCase().includes(this.state.searchQuery)
            || post.keywords[1].toLowerCase().includes(this.state.searchQuery)
            || post.keywords[2].toLowerCase().includes(this.state.searchQuery)
          )) {
            i++;
            return (
              <PostCard postKey={post._id} title={post.title} currency={post.currency} minBudget={post.minBudget}
                        maxBudget={post.maxBudget}
                        timeFrame="hour"
                        keywords={keywords.filter(v => v !== "")}
                        description={post.description}
                        buttonClick={this.contact.bind(this)} buttonText="Contact"/>
            )
          }
          return null;
        })}
        {i === 0 ? (<center style={{ paddingTop: "10px", marginBottom: "50%" }}>Couldn't find
          any posts</center>) : null}
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
            <div className="search-container" style={{ display: 'flex', marginBottom: '10px' }}><i
              className="fa fa-search"
              style={{ color: 'rgb(0,0,0)', marginTop: '10px', marginRight: '10px', marginLeft: '-10px' }}/>
              <input type="input" className="form-control" name="search-bar" placeholder="Search..."
                     style={{ marginTop: 0, marginRight: '0px' }} onChange={this.onChange} id="searchBox"
                     value={this.state.searchBox}/>
              <button className="btn btn-primary btn-light"
                      onClick={this.reloadPostData}
                      type="submit" style={{ marginLeft: '3px' }}>Search
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
