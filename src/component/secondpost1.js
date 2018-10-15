import React from 'react'
import { Container, Header, List, Icon } from 'semantic-ui-react'

const SecondPost1 = () => (
  <div>
    <Container fluid>
      <Header as='h1'>Pros</Header>
      <List animated verticalAlign='middle'>
    <List.Item>
      <List.Content>
        <List.Header>
        <Icon name='searchengin' />  Very good and easy for proper SEO management.</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header><Icon name='protect' />Security</List.Header>
      </List.Content>
    </List.Item>
  </List>
    </Container>
  </div>
)

export default SecondPost1