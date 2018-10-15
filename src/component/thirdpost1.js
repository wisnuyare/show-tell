import React from 'react'
import { Container, Header, List, Icon } from 'semantic-ui-react'

const ThirdPost1 = () => (
  <div>
    <Container fluid>
      <Header as='h1'>Cons</Header>
      <List animated verticalAlign='middle'>
    <List.Item>
      <List.Content>
        <List.Header>
        <Icon loading name='spinner' /> Slow speed and performance</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header><Icon name ='mobile' /> Mobile App Development becomes difficult</List.Header>
      </List.Content>
    </List.Item>
  </List>
    </Container>
  </div>
)

export default ThirdPost1