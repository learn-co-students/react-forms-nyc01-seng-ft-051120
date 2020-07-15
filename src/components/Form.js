import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
  handleSubmitChange=(e)=>{
    e.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    this.sendFormDataSomewhere(formData)
    this.setState({submittedData: this.state.lastName.concat(formData)})
  }
  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmitChange}>
        <input onChange={this.handleFirstNameChange} type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input onChange={this.handleLastNameChange} type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
      {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;