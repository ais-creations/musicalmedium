import React, {Component} from "react";

class ProfileCard extends Component {
  render() {
    return (
      <div className="provider-list-card needAjaxFormContainer shadowDiv">
        <div className="provider-left-block textAlignCen">
          <a href="#" className="provider-image-block ">
            <img src="189315459.jpg"
                 data-src="https://c.urbanpro.com/assets/new-ui/green_loader-d6768be07187d99b6cc4ed43481666aa.gif"
                 alt="Rado the guitarist" className="provider-img lazyImage not-loaded-spinner"/>
          </a>
          <span className="sponsFeaturedTag">100</span>
        </div>
        <div className="provider-list-details pos-rel ">
          <div className="details-row">
            <a href="#" className="providerNameLink provider-name loud ellipsis_line fontSize16 ">
              <span>Radostin Petrov</span>
            </a>
            <input type="hidden" name="branchId" className="needFromBranchId" defaultValue={1837798}/>
          </div>
          <div className="details-row">
            <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon">
            </span>
            Classical Guitarist
          </div>
          <div className="details-row">
            <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon">
            </span>
            5 Years of Experience
          </div>
          <p className="details-row descPart loud">I am a Certified Classical Guitarist, having taught at the Royal
            College of Music for 4 years. I have been teaching students remotely for the past 3 months. I am...</p>
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
          <div className="provider-right-block textAlignRit" data-branchinsid={1837798} data-seopageinstanceid={4853609}
               data-from="seoSearch" data-exotelneedflow="true" data-uniqueid data-pagegroupvalue="ProviderIndia"
               data-source="SEARCH_RESULTS" data-topicid={1766}>
            <div className="appendMsgCall">
              <button className="btn btn-primary" data-for="message">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard