import React, {Component} from "react";

class TeachPage extends Component {
  render() {
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
            <div className="provider-list-card needAjaxFormContainer shadowDiv">
              <div className="provider-list-details pos-rel ">
                <div className="details-row">
                  <a
                    href="#"
                    className="providerNameLink provider-name loud ellipsis_line fontSize16 "
                  >
                    <span>Singing lessons wanted</span>
                  </a>
                  <input
                    type="hidden"
                    name="branchId"
                    className="needFromBranchId"
                    defaultValue={1837798}
                  />
                </div>
                <div className="details-row">
                  <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon"/>
                  $10-$15 per hour
                </div>
                <p className="details-row descPart loud">
                  I am a Rock Guitarist keen to improve my singing skills and
                  join a band. Would ideally like hourly lessons thrice a week
                </p>
                <div className="tags">
                  <div className="tag">Singing</div>
                  <div className="tag">Vocals</div>
                  <div className="tag">Pop</div>
                </div>
                <div
                  className="provider-right-block textAlignRit"
                  data-branchinsid={1837798}
                  data-seopageinstanceid={4853609}
                  data-from="seoSearch"
                  data-exotelneedflow="true"
                  data-uniqueid
                  data-pagegroupvalue="ProviderIndia"
                  data-source="SEARCH_RESULTS"
                  data-topicid={1766}
                >
                  <div className="appendMsgCall">
                    <button className="btn btn-info" data-for="message">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="provider-list-card needAjaxFormContainer shadowDiv">
              <div className="provider-list-details pos-rel ">
                <div className="details-row">
                  <a
                    href="#"
                    className="providerNameLink provider-name loud ellipsis_line fontSize16 "
                  >
                    <span>Piano lessons wanted</span>
                  </a>
                  <input
                    type="hidden"
                    name="branchId"
                    className="needFromBranchId"
                    defaultValue={1837798}
                  />
                </div>
                <div className="details-row">
                  <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon"/>
                  $20-$30 per hour
                </div>
                <p className="details-row descPart loud">
                  Piano student searching for competent teacher to teach twice a
                  week.{" "}
                </p>
                <div className="tags">
                  <div className="tag">Piano</div>
                  <div className="tag">Beginner</div>
                  <div className="tag">Classical</div>
                </div>
                <div
                  className="provider-right-block textAlignRit"
                  data-branchinsid={1837798}
                  data-seopageinstanceid={4853609}
                  data-from="seoSearch"
                  data-exotelneedflow="true"
                  data-uniqueid
                  data-pagegroupvalue="ProviderIndia"
                  data-source="SEARCH_RESULTS"
                  data-topicid={1766}
                >
                  <div className="appendMsgCall">
                    <button className="btn btn-info" data-for="message">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="provider-list-card needAjaxFormContainer shadowDiv">
              <div className="provider-list-details pos-rel ">
                <div className="details-row">
                  <a
                    href="#"
                    className="providerNameLink provider-name loud ellipsis_line fontSize16 "
                  >
                    <span>Bass guitarist required to play</span>
                  </a>
                  <input
                    type="hidden"
                    name="branchId"
                    className="needFromBranchId"
                    defaultValue={1837798}
                  />
                </div>
                <div className="details-row">
                  <span className="icon-briefcase fontSize22 marginTop2 provider-info-icon"/>
                  $15-$20 per hour
                </div>
                <p className="details-row descPart loud">
                  Bass guitarist needed for a gig in London. Contact for details
                </p>
                <div className="tags">
                  <div className="tag">Bass</div>
                  <div className="tag">Gig</div>
                  <div className="tag">London</div>
                </div>
                <div
                  className="provider-right-block textAlignRit"
                  data-branchinsid={1837798}
                  data-seopageinstanceid={4853609}
                  data-from="seoSearch"
                  data-exotelneedflow="true"
                  data-uniqueid
                  data-pagegroupvalue="ProviderIndia"
                  data-source="SEARCH_RESULTS"
                  data-topicid={1766}
                >
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
    );
  }
}

export default TeachPage;
