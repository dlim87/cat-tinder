import React,{Component} from 'react';
import {nav,form} from 'react-bootstrap'

class Header extends Component {
  render(){
    return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="/">Cat Tinder</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/list">Cat List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/cats">details</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">About</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
)}
}

export default Header
