import React, { Component } from 'react';
import {
  Header,
  Segment,
  Container,
  Card,
  Grid,
  Image,
} from 'semantic-ui-react';
import GOT from '../images/G.jpg';
import axios from 'axios';

class Home extends Component {
  state = { characters: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/characters/')
      .then( res => {
        this.setState({ characters: res.data })
        console.log(res.data);
    })
      .catch(err => {
        console.log(err.response);
  });
}

displayCharacters = () => {
  const baseURL = 'https://api.got.show/'
  return this.state.characters.map( char => {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            {char.name}
            <hr />
            {char.house}
          </Card.Header>
          <Card.Description>
            {
              char.imageLink ?
              <Image src={baseURL + char.imageLink} />
              :
              <Image src={GOT}/>
            }
          </Card.Description>
        </Card.Content>
      </Card>
    )
  })
}


  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>Game Of Thrones API</Header>
        <Header as='h3' textAlign='center'>Characters</Header>
        <Card.Group stackable itemsPerRow={3}>
          { this.displayCharacters() }
        </Card.Group>
      </Container>
    );
  }
}

export default Home;
