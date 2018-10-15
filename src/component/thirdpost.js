import React from 'react'
import { Container, Header, List, Icon } from 'semantic-ui-react'

const ThirdPost = () => (
  <div>
    <Container fluid>
      <Header as='h1'>Cons</Header>
      <List animated verticalAlign='middle'>
    <List.Item>
      <List.Content>
        <List.Header>
        <Icon name='searchengin' />SEO optimization</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header><Icon loading name='history' />Browser history</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header><Icon name='js square'/> Disabled JavaScript</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header><Icon name='user secret' />Security issues</List.Header>
      </List.Content>
    </List.Item>
  </List>
    </Container>
  </div>
)

export default ThirdPost