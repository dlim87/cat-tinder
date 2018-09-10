import React,{Component} from 'react';
import {FormGroup,form, FormControl, ControlLabel} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import './NewCat.css'

class NewCat extends Component{
  constructor(props){
  super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: '',
        img:''
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
    console.log(this.props.success)
    this.props.handleNewCat(this.state.form)
  }
  // componentWillMount(){
  //   this.props.resetsuccess()
  // }
  render(){
  return(
    <div clasName='CatFormContainer'>
      <form className='CatForm'>
        <ControlLabel id="Name">Name</ControlLabel>
        <FormControl className="form-control"
          type="text"
          name="name"
          id="NameForm"
          className="form-control form-control-sm"
          placeholder="enter name"
          onChange={this.handleChange.bind(this)}
          value={this.state.form.name}
          />
        <label id="Age">Age</label>
          <FormControl className="form-control"
            type="number"
            name="age"
            id="AgeForm"
            placeholder="Age"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.age}
            />
          <label id="Enjoys">Enjoys</label>
            <FormControl className="form-control"
              type="textfield"
              name="enjoys"
              id="EnjoysForm"
              placeholder="this cat enjoys"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.enjoys}
              />

              <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select</ControlLabel>
       <FormControl componentClass="select" placeholder="select" value={this.state.form.img} name="img" onChange={this.handleChange.bind(this)}
         >
         <option value="/blankcat.png">What kind of cat are you?</option>
         <option value ="/corporatecat.jpg">Corporate</option>
         <option value = "/Hipstercat.jpg">Hipster</option>
         <option value= "/reggaecat.jpg">Reggae</option>
         <option value="/skatercat.jpg">Sk8er</option>
         <option value="/sushicat.jpg">Sushi</option>
         <option value="/tequilacat.jpg">Fiesta</option>
         <option value="wizardcat.jpg">Magic</option>
       </FormControl>
     </FormGroup>
            <button type="submit" onClick={this.NewCat.bind(this)}>Create Cat Profile</button>
      </form>
      {this.props.success &&
       <Redirect to="/cats" />}
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
