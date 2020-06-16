import React, {Component} from 'react'

class ChatPage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.send = this.send.bind(this);
    this.state = {
      profileView: true,
      message: "",
      profilesLoading: true,
      messagesLoading: true,
      profiles: {},
      messages: {}
    }
  }

  componentDidMount() {

  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  toggle() {
    if (this.state.profileView) {
      // Open chat

      this.setState({
        profileView: false
      })
    } else {
      this.setState({
        profileView: true
      })
    }
  }

  send() {
    if (this.state.message !== null && this.state.message !== "") {
      this.setState({
        message: ""
      })
      // TODO send message
    }
  }

  getDisplayBox() {
    if (this.state.profileView) {
      return (
        <div className="rounded-lg overflow-hidden shadow">
          <div className="bg-white">
            <div className="bg-gray px-4 py-2 bg-light">
              <p className="h5 mb-0 py-1">Recent</p>
            </div>
            <div className="messages-box">
              <div className="list-group rounded-0">
                <a onClick={this.toggle} className="list-group-item list-group-item-action rounded-0">
                  <div className="media"><img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user"
                    width={50} className="rounded-circle"/>
                    <div className="media-body ml-4">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">25
                        Dec</small>
                      </div>
                      <p className="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor unactive incididunt ut labore.</p>
                    </div>
                  </div>
                </a>
                <a className="list-group-item list-group-item-action rounded-0">
                  <div className="media"><img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user"
                    width={50} className="rounded-circle"/>
                    <div className="media-body ml-4">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">25
                        Dec</small>
                      </div>
                      <p className="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="rounded-lg overflow-hidden shadow">
        <div className="bg-gray px-4 py-2 bg-light" style={{textAlign: 'right'}}>
          <button onClick={this.toggle} className="btn btn-light"><i className="fas fa-arrow-left"/></button>
        </div>
        <div className="px-4 py-5 chat-box bg-white">
          {/* Sender Message*/}
          <div className="media w-50 mb-3"><img
            src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user"
            width={50} className="rounded-circle"/>
            <div className="media-body ml-3">
              <div className="bg-light rounded py-2 px-3 mb-2">
                <p className="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
              </div>
              <p className="small text-muted">12:00 PM | Aug 13</p>
            </div>
          </div>
          {/* Reciever Message*/}
          <div className="media w-50 ml-auto mb-3">
            <div className="media-body">
              <div className="bg-primary rounded py-2 px-3 mb-2">
                <p className="text-small mb-0 text-white">Test which is a new approach to have all
                  solutions</p>
              </div>
              <p className="small text-muted">12:00 PM | Aug 13</p>
            </div>
          </div>
        </div>
        {/* Typing area */}
        <form onSubmit={this.send} className="bg-light">
          <div className="input-group">
            <input type="text" placeholder="Type a message" aria-describedby="button-addon2"
                   className="form-control py-4 bg-light" id="message"
                   style={{ marginLeft: '4px', marginTop: '5px', marginBottom: '5px', borderRadius: '50px' }}
                   onChange={this.onChange} value={this.state.message}/>
            <div className="input-group-append">
              <button id="button-addon2" type="submit" className="btn btn-primary btn-link"
                      style={{
                        color: 'white',
                        marginLeft: '5px',
                        marginTop: '5px',
                        marginBottom: '5px',
                        marginRight: '4px',
                        borderRadius: '50%'
                      }}>
                <i className="fa fa-paper-plane"/>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }


  render() {
    return (
      <main className="page landing-page">
        <div className="bootstrap_chat">
          <div className="container py-5 px-4">
            {this.getDisplayBox()}
            {/*<div className="row rounded-lg overflow-hidden shadow">*/}
            {/* Chat Box*/}
            {/*</div>*/}
          </div>
        </div>
      </main>
    )
  }
}

export default ChatPage