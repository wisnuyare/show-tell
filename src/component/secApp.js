import React, { Component } from 'react';
import MenuTest from './menutest';
import FirstPost from './firstpost';
import SecondPost from './secondpost';
import ThirdPost from './thirdpost';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Grid, GridColumn, Segment } from 'semantic-ui-react'


class secApp extends Component {
  
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>          
          <Grid.Column width={3}> 
            <MenuTest />            
          </Grid.Column>       
          <Grid.Column stretched width={12}>
          <Segment>
            <Switch>
              <Route path = '/firstpost' component = { FirstPost } />
              <Route path = '/secondpost' component = { SecondPost } />
              <Route path = '/thirdpost' component = { ThirdPost } />
            </Switch>
          </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </BrowserRouter>
      </div>
      
       
    );
  }
}

export default secApp;

