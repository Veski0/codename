import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Done from './Done'
import Form from './Form'
import Generate from './Generate'

class Body extends Component {
  render () {
    // NOTE: This simple conditional implementation is probably not optimal or
    // NOTE: standard, but it's my first go with ReactJS! (I really like it)
    return this.props.passed.complete ? (
      <Done passed={this.props.passed}/>
    ) : (
      <div>
        <Form passed={this.props.passed}/>
        <Generate passed={this.props.passed}/>
      </div>
    )
  }
}

export default Body
