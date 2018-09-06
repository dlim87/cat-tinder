import React,{Component} from 'react';
import {form, btn} from 'react-bootstrap'

class NewCat extends Component{
  constructor(props){
  super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }
  handleChange(event){
    let {form} = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }
  render(){
  return(
    <div>
      <p> new cat?</p>
      <form>
        <div className="form-group">
          <label for="example name">Name:</label>
          <input type='text' className="form-control" placeholder="enter name"/>
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type='number' className="form-control" placeholder="#" />
        </div>
        <div className="form-group">
          <label> Describe your cat:</label>
          <input type='textarea' className="form-control" placeholder="Cat description"/>
        </div>
        <button type="submit" className="btn-primary" onClick={this.handleChange}> Submit</button>
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
