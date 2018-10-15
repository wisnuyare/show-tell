import React, { Component } from 'react';
import MenuTest2 from './menutest2';
import FirstPost1 from './firstpost1';
import SecondPost1 from './secondpost1';
import ThirdPost1 from './thirdpost1';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Grid, GridColumn, Segment } from 'semantic-ui-react'


class ThirdApp extends Component {
  
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>          
          <Grid.Column width={3}> 
            <MenuTest2 />            
          </Grid.Column>       
          <Grid.Column stretched width={12}>
                <Segment color="red">
                    <Switch>
                        <Route path = '/firstpost1' component = { FirstPost1 } />
                        <Route path = '/secondpost1' component = { SecondPost1 } />
                        <Route path = '/thirdpost1' component = { ThirdPost1 } />
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

export default ThirdApp;

