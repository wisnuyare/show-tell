import React, { Component } from 'react';
import NavbarLeft from './component/navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ThirdApp from './component/thirdApp';
import secApp from './component/secApp';
import { Grid, GridColumn } from 'semantic-ui-react'
import Compare from './component/compare'
import './App.css'


class App extends Component {
  
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Grid divided='vertically'>
        <Grid.Row>          
          <Grid.Column> 
            <NavbarLeft />            
          </Grid.Column>                      
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Switch>
              <Route path = '/thirdApp' component = { ThirdApp } />
              <Route path = '/secApp' component={ secApp } />
              <Route path = '/compare' component={ Compare } />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </BrowserRouter>
      </div>
      
       
    );
  }
}

export default App;

