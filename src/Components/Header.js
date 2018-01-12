import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Modal from './Modal'

class Header extends Component {
  render () {
    return (
      <div className="jumbotron jumbotron-fluid">
        <span className="about fa fa-info-circle text-muted" onClick={this.props.passed.openModal}/>
        <Modal passed={this.props.passed}/>
        <div className="container">
          <h1 className="display-4">Codename Generator</h1>
          <div className={this.props.passed.complete ? 'd-none' : ''}>
            <Fade top>
              <p className="lead">This page will generate a <span className="badge badge-success">codename</span> so that you can stay anonymous.</p>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
