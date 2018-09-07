import React,{Component} from 'react';
import {form, btn, FormControl, ControlLabel} from 'react-bootstrap'

class NewCat extends Component{
  constructor(props){
  super(props)
    this.state = {
      form:{
        Name: '',
        Age: '',
        Enjoys: ''
      }
    }
  }
  handleChange(event){
    let {form} = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }
  NewCat(event){
    event.preventDefault()
    console.log(this.state.form)
    this.props.addCat(this.state.form)
  }
  render(){
  return(
    <div>
      <p> new cat?</p>
      <form>
        <ControlLabel id="Name">Name</ControlLabel>
        <FormControl
          type="text"
          name="Name"
          id="NameForm"
          className="form-control form-control-sm"
          placeholder="enter name"
          onChange={this.handleChange.bind(this)}
          value={this.state.form.name}
          />
        <label id="Age">Age</label>
          <FormControl
            type="number"
            name="Age"
            id="AgeForm"
            placeholder="Age"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.age}
            />
          <label id="Enjoys">Enjoys</label>
            <FormControl
              type="textfield"
              name="Enjoys"
              id="EnjoysForm"
              placeholder="this cat enjoys"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.enjoys}
              />
            <button type="submit" onClick={this.NewCat.bind(this)}>Create Cat Profile</button>
      </form>
    </div>
  )
  }
}

export default NewCat;

// handleChange(event){
//   let {form } = this.state
//   form[event.target.name] = event.target.value
//   this.setState({form: form})
// }
