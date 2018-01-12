import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class Generate extends Component {
  render () {
    return this.props.passed.animal.length > 0 && this.props.passed.color.length > 0 ? (
        <Fade bottom>
          <div className="container pt-4">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <button type="button" className="btn btn-outline-success btn-block" onClick={this.props.passed.createOutput}>Generate</button>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </Fade>
      ) : (<div></div>)
  }
}

export default Generate
