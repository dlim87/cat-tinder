import React, { Component } from 'react';
import Header from './Header'
import Cats from './Cats'
import NewCat from './NewCat'
import {BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom'
import {getCats,createCat} from './api'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [],
      newCatSuccess: false
    }
  }

  componentWillMount() {
       getCats()
       .then(APIcats => {
           this.setState({
               cats: APIcats
           })
       })
   }

  handleNewCat(newCatInfo) {
    console.log("New Cat TRY", newCatInfo)
    createCat(newCatInfo)
     .then(successCat => {
         console.log("CREATE SUCCESS!", successCat);
         this.setState({
             newCatSuccess: true
         })
     })
   }
  addCat(cat){
    cat["id"]=this.state.cats.length
    console.log(cat);
    this.setState({cats: [...this.state.cats,cat]})
    console.log(this.state.cats);
  }

  render() {
    return (
      <div>
              <Header />
              <Router>
                  <Switch>
                      <Route exact path='/cats' render={(props) => <Cats cats={this.state.cats}/>}
                        />
                      <Route exact path='/' render={(props)=> <NewCat handleNewCat={this.handleNewCat.bind(this)} success={this.state.newCatSuccess}/>}/>
                  </Switch>
              </Router>
          </div>
    );
  }
}

export default App;
