import React, {Component} from "react";

class ProfileCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="provider-list-card needAjaxFormContainer shadowDiv">
        <div className="provider-left-block textAlignCen">
          <a href="#" className="provider-image-block ">
            <img src={this.props.src}
                 data-src="https://c.urbanpro.com/assets/new-ui/green_loader-d6768be07187d99b6cc4ed43481666aa.gif"
                 alt="" className="provider-img lazyImage not-loaded-spinner"/>
          </a>
          <span className="sponsFeaturedTag">{this.props.rating}</span>
        </div>
        <div className="provider-list-details pos-rel ">
          <div className="details-row">
            <a href="" className="providerNameLink provider-name loud ellipsis_line fontSize16 ">
              <span>{this.props.name}</span>
            </a>
            <input type="hidden" name="branchId" className="needFromBranchId" defaultValue={1837798}/>
          </div>
          <div className="details-row">
            <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon"/>
            {this.props.title}
          </div>
          <div className="details-row">
            <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon"/>
            {this.props.years} Years of Experience
          </div>
          <p className="details-row descPart loud">
            {this.props.description}
          </p>
          <div className="tags">
            {this.props.keywords.map(keyword => (
              <div className="tag">{keyword}</div>
            ))}
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