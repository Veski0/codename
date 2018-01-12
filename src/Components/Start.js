import React, { Component } from 'react'

class Start extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            { /* NOTE: Demonstration of setλ is found here. */ }
            <button type="button" className={this.props.passed.ready ? 'btn btn-outline-success btn-block d-none' : 'btn btn-outline-success btn-block'} onClick={this.props.passed.setλ('ready')(true)}>Get Started!</button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  }
}

export default Start
