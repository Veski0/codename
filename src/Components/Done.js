import React, { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import Fade from 'react-reveal/Fade'
import Alert from './Alert'

class Body extends Component {
  render () {
    return (
      <Fade bottom>
        <h4>Your secret codename is</h4>
        <h1><span className="badge badge-success code">{this.props.passed.result}</span></h1>
        <hr/>
        <Alert passed={{ visible: this.props.passed.copied, dismiss: this.props.passed.setCopiedFalse }}/>
        <div className="container">
          <div className="row">
            <CopyToClipboard text={this.props.passed.result} onCopy={this.props.passed.setCopiedTrue}>
              <div className="col">
                <button type="button" className="btn btn-outline-dark btn-block"><span className="fa fa-clipboard"></span> Copy codename to clipboard</button>
              </div>
            </CopyToClipboard>
            <div className="col">
              <button type="button" className="btn btn-outline-dark btn-block" onClick={this.props.passed.resetPage}><span className="fa fa-refresh"></span> Create a new codename</button>
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}

export default Body
