import React, {Component} from 'react'
import {ListGroup,ListGroupItem} from 'react-bootstrap'

class List extends Component{
  render(){
    return (
      <ListGroup>
      {this.props.cats.map((cat,index)=>{
        return (
          <ListGroupItem className="catItem"
          key={index}>{cat.name}</ListGroupItem>
        )
      })}
      </ListGroup>
    )
  }
}
export default List
