import React, { Component } from 'react';
import {
  Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'
import './Cats.css'

class Cats extends Component {
  render() {
    return (
      <div className="meow">
      <Row>
      <Col xs={6}>
              <ListGroup>
              {this.props.cats.map((cat, index) =>{
                return (
                  <ListGroupItem className="CatList"
                    key={index}
                    header={
                      <h4>

                        <span className='cat-name' id={`name${index}`}>
                          {cat.name}
                        </span>
                        - <small className='cat-age'>{cat.age} years old</small>
                      </h4>

                    }>
                    <img className='CatPic' src={cat.img}/>

                    <span className='cat-enjoys'>
                      {cat.enjoys}
                    </span>
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
        </div>
    );
  }
}

export default Cats;
