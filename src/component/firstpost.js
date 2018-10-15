import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'
import ImageSpa from '../image/SPA1.png'

const FirstPost = () => (
  <div>
    <Container fluid>
      <Header as='h1'>SPA</Header>
      <p>
      Single-Page Applications (SPAs) are Web apps that load a single HTML page and dynamically update that page as the user interacts with the app. SPAs use AJAX and HTML5 to create fluid and responsive Web apps, without constant page reloads. However, this means much of the work happens on the client side, in JavaScript. 
      </p>
      <p>
      <Image src={ImageSpa} fluid />
      </p>
    </Container>
  </div>
)

export default FirstPost