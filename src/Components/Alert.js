import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class Alert extends Component {
  render () {
    return this.props.passed.visible ? (
      <Fade bottom>
        <div className="container">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> Codename copied
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.props.passed.dismiss}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </Fade>
    ) : (<div></div>)
  }
}

export default Alert
