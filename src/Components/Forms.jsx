import React, { Component } from 'react'

class Forms extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      value: '',
      email: '',
      password: '',
      welcomeMessage: ''
    };

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}
  handleChange(event){
  this.setState({
  value: event.target.value
  })
}

  handleSubmit(event){
  event.preventDefault();

const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email.trim());

  if(this.state.value.trim() === ''){
    alert('Please enter your name.') 
  } else if(!isValidEmail){
    alert('Please enter your email ') 
  } else if (!this.state.password){
    alert('Please enter your password:')
  } else 
    this.setState({
  welcomeMessage:`Welcome, ${this.state.value}`,
  })
  }
  
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="name">Enter you name:</label>
          <br />
          <input type="text" value={ this.state.value } name='name' onChange={this.handleChange}/>
          <br />
          <label htmlFor="email">Enter your email:</label>
          <br />
          <input 
          type="email" 
          value={this.state.email} 
          name='email' 
          onChange={(e) => this.setState({ email: e.target.value })}/>
          <br />
          <label htmlFor="password">Enter your password:</label>
          <br />
          <input type="password" value={this.state.password} name='password' onChange={(e) => this.setState({password: e.target.value})}/>
          <br />
          <button type='Submit' onClick={this.handleSubmit}>Submit</button>
          </form>
        <div className="message-div">
          <p>{this.state.welcomeMessage}`</p>
        </div>
      </div>
    )
  }
}

export default Forms