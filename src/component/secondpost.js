import React from 'react'
import { Container, Header, List, Icon } from 'semantic-ui-react'

const SecondPost = () => (
  <div>
    <Container fluid>
      <Header as='h1'>Pros</Header>
      <List animated verticalAlign='middle'>
    <List.Item>
      <List.Content>
        <List.Header>
      <Icon name='lightning' />Fast and responsive</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header><Icon name='folder open' />Caching capabilities</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header><Icon loading name='chrome'/> Debugging with Chrome</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header><Icon name='code' /> Reusable code for mobile development</List.Header>
      </List.Content>
    </List.Item>
  </List>
    </Container>
  </div>
)

export default SecondPost