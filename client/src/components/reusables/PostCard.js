import React, {Component} from "react";
import axios from 'axios';

class PostCard extends Component {
  constructor(props) {
    super(props);
  }

  toggle() {
  }

  render() {
    return (
      <div className="provider-list-card needAjaxFormContainer shadowDiv">
        <div className="provider-list-details pos-rel ">
          <div className="details-row">
            <a href="#" className="providerNameLink provider-name loud ellipsis_line fontSize16 ">
              <span>{this.props.title}</span>
            </a>
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
          <div className="provider-right-block textAlignRit">
            <div className="appendMsgCall">
              <button className="btn btn-info" onClick={this.props.toggle}>
                {this.props.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard