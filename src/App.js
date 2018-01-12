import React, { Component } from 'react'
import Header from './Components/Header'
import Start from './Components/Start'
import Body from './Components/Body'
import './App.css'

// NOTE: Constants.
const COLORS = ['Mulberry', 'Cerulean', 'Olive', 'Taupe', 'Ivory']
const ANIMALS = ['Cat', 'Dog', 'Snail', 'Mouse', 'Fox']

// NOTE: Utility.
const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min
const shim = (val, that) => that.setState({ color: val })

class App extends Component {
  constructor () {
    super()

    // NOTE: The state here is stored in bare, mutable variables. Were this
    // NOTE: production code, I would opt to use a monadic approach to state
    // NOTE: such as ImmutableJS, FunctionalJS (a constant monadic interface of
    // NOTE: my own design) or possibly Redis. Each state variable has been
    // NOTE: given its own setter function for readability. A generic curried
    // NOTE: lambda function would more flexible and provide a far cleaner
    // NOTE: interface in this situation, but would create a small overhead.
    // NOTE: I have provided one (setλ) for your perusal, and used it in one
    // NOTE: location (src/Components/Start.js) to demonstrate its interface.

    this.state = {
      placeholders: {
        color: COLORS[rand(0, COLORS.length)],
        animal: ANIMALS[rand(0, ANIMALS.length)]
      },
      setλ: field => value => f =>
        this.setState(JSON.parse(`{ "${field}": ${value} }`)),
      generate: (color, animal) => `${color}${animal}`,
      color: '',
      setColor: e => setTimeout(shim, 1000, e.target.value, this),
      animal: '',
      setAnimal: e => this.setState({ animal: e.target.value }),
      ready: false,
      setReady: f => this.setState({ ready: true }),
      copied: false,
      setCopiedTrue: f => this.setState({ copied: true }),
      setCopiedFalse: f => this.setState({ copied: false }),
      modal: false,
      openModal: f => this.setState({ modal: true }),
      shutModal: f => this.setState({ modal: false }),
      complete: false,
      result: '',
      createOutput: f => {
        this.setState({ result: this.state.generate(this.state.color, this.state.animal) })
        this.setState({ complete: true })
      },
      // NOTE: There are probably better ways to do this, such as a for-of, but
      // NOTE: I have opted for this method of resetting the page for the sake
      // NOTE: of clarity and prototyping speed.
      resetPage: f => {
        this.setState({ color: '' })
        this.setState({ animal: '' })
        this.setState({ ready: false })
        this.setState({ complete: false })
        this.setState({ result: '' })
        this.setState({ copied: false })
      }
    }
  }

  // NOTE: After careful consideration and much investigation, I decided to pass
  // NOTE: the whole state from the root parent through to the lowest level child.
  // NOTE: I did this to improve the readability of the app, and to allow me to
  // NOTE: prototype quickly. This area of the application is where the most
  // NOTE: optimisation could occur and, were this production code, where I would
  // NOTE: start if I found my that code was running at sub-optimal speeds.

  render () {
    return (
      <div className="App">
        <Header passed={this.state}/>
        <Body   passed={this.state}/>
        <Start  passed={this.state}/>
      </div>
    )
  }
}

export default App
