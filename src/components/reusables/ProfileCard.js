import React, {Component} from "react";

class ProfileCard extends Component {
  render() {
    return (
      <div className="provider-list-card needAjaxFormContainer shadowDiv">
        <div className="provider-left-block textAlignCen">
          <a href="#" className="provider-image-block ">
            <img src={require("../../assets/img/189315459.jpg")}
                 data-src="https://c.urbanpro.com/assets/new-ui/green_loader-d6768be07187d99b6cc4ed43481666aa.gif"
                 alt="Rado" className="provider-img lazyImage not-loaded-spinner"/>
          </a>
          <span className="sponsFeaturedTag">4.7</span>
        </div>
        <div className="provider-list-details pos-rel ">
          <div className="details-row">
            <a href="#" className="providerNameLink provider-name loud ellipsis_line fontSize16 ">
              <span>Radostin Petrov</span>
            </a>
            <input type="hidden" name="branchId" className="needFromBranchId" defaultValue={1837798}/>
          </div>
          <div className="details-row">
            <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon"/>
            Classical Guitarist
          </div>
          <div className="details-row">
            <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon"/>
            5 Years of Experience
          </div>
          <p className="details-row descPart loud">
            I am a Certified Classical Guitarist, having taught at the Royal College of Music for 4 years. I have been
            teaching students remotely for the past 3 months. I am...
          </p>
          <div className="tags">
            <div className="tag">Guitarist</div>
            <div className="tag">Classical</div>
            <div className="tag">Professional</div>
          </div>
          <div className="provider-right-block textAlignRit">
            <div className="appendMsgCall">
              <button className="btn btn-info" data-for="message">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard