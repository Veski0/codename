import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class Modal extends Component {
  render () {
    return this.props.passed.modal ? (
      <Fade bottom>
        <div className="container p-2">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.props.passed.shutModal}>
            <span aria-hidden="true">&times;</span>
          </button>
          Simple Software from James Bateman
          <br/>
          <span className="text-muted"><small>Hire me! <span className="fa fa-thumbs-o-up"/></small></span>
          <hr/>
        </div>
      </Fade>
    ) : (<div></div>)
  }
}

export default Modal
