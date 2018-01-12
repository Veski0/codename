import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

// NOTE: The Card.js interface is the only one that does not simply use the
// NOTE: whole state as the other components do. This is because it is a
// NOTE: customisable component. Passing the un-altered state would break this
// NOTE: Component Class.

class Card extends Component {
  render () {
    return this.props.passed.visible ? (
      <div className="col">
        <Fade bottom>
          <div className="card square shadow bg-jumbo border-jumbo">
            <div className="card-body">
              <h3 className="card-title">{this.props.passed.title}</h3>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="addon"><i className={this.props.passed.icon}></i></span>
                </div>
                <input type="text" className="form-control" placeholder={this.props.passed.placeholder} aria-describedby="addon" onChange={ this.props.passed.onchange }></input>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    ) : (<div></div>)
  }
}

export default Card
