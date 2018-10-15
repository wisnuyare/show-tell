import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'
import ImageSpa from '../image/MPA1.png'

const FirstPost1 = () => (
  <div>
    <Container fluid>
      <Header as='h1'>MPA</Header>
      <p>
      Multiple-page applications work in a “traditional” way. Every change eg. display the data or submit data back to server requests rendering a new page from the server in the browser.
      Every request we send to the server here by clicking on a category link or typing new URL leads to a new page being sent back from the server. That could be pure HTML with few resources like images or complete page dynamically rendered by server-side languages.
      </p>
      <p>
      <Image src={ImageSpa} fluid />
      </p>
    </Container>
  </div>
)

export default FirstPost1