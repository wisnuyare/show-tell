import React from 'react'
import { Grid, List, Segment, Header, Icon } from 'semantic-ui-react'

const Compare = () => (
  <Grid divided='vertically'>
    <Grid.Row>
      <Grid.Column>
      <Segment inverted>
      <Header as='h1'>How to make a perfect choice?</Header>
    <List divided inverted relaxed>
      <List.Item>
        <List.Content>
          <List.Header>Goals of your business and the purpose of your site <Icon name='chart line' /></List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Is it strategically important for this product to have an excellent user experience <Icon name='desktop' /> </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Will your project involve a native mobile app<Icon name='mobile alternate' /> </List.Header>
        </List.Content>
      </List.Item>
    </List>
  </Segment>
      </Grid.Column>      
    </Grid.Row>
  </Grid>
)

export default Compare
