import React, { Component } from 'react'
import Card from './Card'
import Fade from 'react-reveal/Fade'

class Form extends Component {
  render () {
    return this.props.passed.ready ? (
      <Fade bottom>
        <div className="container">
          <div className="row">
            <Card passed={{
              visible: true,
              title: 'What is your favorite color?',
              icon: 'fa fa-paint-brush',
              placeholder: this.props.passed.placeholders.color,
              onchange: this.props.passed.setColor
            }}/>
            <Card passed={{
              visible: this.props.passed.color.length,
              title: 'Which animal is the cutest?',
              icon: 'fa fa-paw',
              placeholder: this.props.passed.placeholders.animal,
              onchange: this.props.passed.setAnimal
            }}/>
          </div>
        </div>
      </Fade>
    ) : (<div></div>)
  }
}

export default Form
