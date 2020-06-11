import React, {Component} from 'react'
import ProfileCard from "../reusables/ProfileCard";

class LearnPage extends Component {
  render() {
    return (
      <main className="page">
        <section className="clean-block features">
          <div className="container" style={{ paddingTop: '30px' }}>
            <div>
              <div className="post-holder" style={{ marginRight: 0, marginBottom: '15px' }}>
                <button className="btn btn-primary" type="button" style={{ margin: 0, marginBottom: 0 }}>Post
                  Requirement
                </button>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <div className="block-heading" style={{ marginBottom: '0px', paddingTop: '0px' }}>
                  <h2 className="text-info" style={{ fontSize: '24px', marginBottom: '0px' }}>Active Posts</h2>
                </div>
                <div className="provider-list-card needAjaxFormContainer shadowDiv">
                  <div className="provider-list-details pos-rel ">
                    <div className="details-row">
                      <a href="#" className="providerNameLink provider-name loud ellipsis_line fontSize16 ">
                        <span>Singing lessons wanted</span>
                      </a>
                      <input type="hidden" name="branchId" className="needFromBranchId" defaultValue={1837798}/>
                    </div>
                    <div className="details-row">
                      <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon">
                      </span>
                      $10-$15 per hour
                    </div>
                    <p className="details-row descPart loud">I am a Rock Guitarist keen to improve my singing skills and
                      join a band. Would ideally like hourly lessons thrice a week</p>
                    <div className="tags">
                      <div className="tag">
                        Guitarist
                      </div>
                      <div className="tag">
                        Classical
                      </div>
                      <div className="tag">
                        Professional
                      </div>
                    </div>
                    <div className="provider-right-block textAlignRit" data-branchinsid={1837798}
                         data-seopageinstanceid={4853609} data-from="seoSearch" data-exotelneedflow="true" data-uniqueid
                         data-pagegroupvalue="ProviderIndia" data-source="SEARCH_RESULTS" data-topicid={1766}>
                      <div className="appendMsgCall">
                        <button className="btn btn-danger" data-for="message">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-heading" style={{ marginBottom: '0px', paddingTop: '0px' }}>
              <h2 className="text-info" style={{ fontSize: '24px', marginBottom: '20px' }}>Find Mentors</h2>
            </div>
            <div className="search-container" style={{ display: 'flex', marginBottom: '10px' }}><i
              className="fa fa-search"
              style={{ color: 'rgb(0,0,0)', marginTop: '10px', marginRight: '10px', marginLeft: '-10px' }}/><input
              type="text" className="form-control" name="search-bar" placeholder="Search..."
              style={{ marginTop: 0, marginRight: '0px' }}/>
              <button className="btn btn-primary btn-light" type="button" style={{ marginLeft: '3px' }}>Search</button>
            </div>
            <ProfileCard/>
            <div className="provider-list-card needAjaxFormContainer shadowDiv">
              <div className="provider-left-block textAlignCen">
                <a href="#" className="provider-image-block ">
                  <img src={require("../../assets/img/273509.jpg")}
                       data-src="https://c.urbanpro.com/assets/new-ui/green_loader-d6768be07187d99b6cc4ed43481666aa.gif"
                       alt="Rado the guitarist" className="provider-img lazyImage not-loaded-spinner"/>
                </a>
                <span className="sponsFeaturedTag">5.0</span>
              </div>
              <div className="provider-list-details pos-rel ">
                <div className="details-row">
                  <a href="#" className="providerNameLink provider-name loud ellipsis_line fontSize16 ">
                    <span>Indip Niroula</span>
                  </a>
                  <input type="hidden" name="branchId" className="needFromBranchId" defaultValue={1837798}/>
                </div>
                <div className="details-row">
                  <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon">
                  </span>
                  Tenor Vocalist
                </div>
                <div className="details-row">
                  <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon">
                  </span>
                  15 Years of Experience
                </div>
                <p className="details-row descPart loud">I am a Tenor singer and pianist with a passion for sucking
                  dick. I have been teaching music for 15 years. I have experience teaching students taking grades 1
                  through... </p>
                <div className="tags">
                  <div className="tag">
                    Vocalist
                  </div>
                  <div className="tag">
                    Tenor
                  </div>
                  <div className="tag">
                    Pianist
                  </div>
                  <div className="tag">
                    Trinity Music
                  </div>
                  <div className="tag">
                    GOAT
                  </div>
                </div>
                <div className="provider-right-block textAlignRit" data-branchinsid={1837798}
                     data-seopageinstanceid={4853609} data-from="seoSearch" data-exotelneedflow="true" data-uniqueid
                     data-pagegroupvalue="ProviderIndia" data-source="SEARCH_RESULTS" data-topicid={1766}>
                  <div className="appendMsgCall">
                    <button className="btn btn-info" data-for="message">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default LearnPage