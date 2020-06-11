import React, {Component} from "react";

class UserPostCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="provider-list-card needAjaxFormContainer shadowDiv">
        <div className="provider-list-details pos-rel ">
          <div className="details-row">
            <a href="#" className="providerNameLink provider-name loud ellipsis_line fontSize16 ">
              <span>{this.props.title}</span>
            </a>
            <input type="hidden" name="branchId" className="needFromBranchId" defaultValue={1837798}/>
          </div>
          <div className="details-row">
            <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon"/>
            {this.props.currency}{this.props.minBudget}-{this.props.currency}{this.props.maxBudget} per {this.props.timeFrame}
          </div>
          <p className="details-row descPart loud">{this.props.description}</p>
          <div className="tags">
            {this.props.keywords.map(keyword => (
              <div className="tag">{keyword}</div>
            ))}
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
    );
  }
}

export default UserPostCard