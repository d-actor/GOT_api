import React, { Component } from 'react';
import {
  Header,
  Segment,
  Container,
  Card,
  Grid,
  Image,
} from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {
  state = { episodes: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/episodes/')
      .then( res => {
        this.setState({ episodes: res.data })
    })
      .catch(err => {
        console.log(err.response);
  });
}

displayEpisodes = () => {
  return this.state.episodes.map( ep => {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            Name: {ep.name}
            <hr />
            Directed By: {ep.director}
          </Card.Header>
          <Card.Description>
            Season: {ep.season}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          Air Date { ep.airDate }
        </Card.Content>
      </Card>
    )
  })
}


  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>Game Of Thrones API</Header>
        <Header as='h3' textAlign='center'>Episodes</Header>
        <Card.Group stackable itemsPerRow={3}>
          { this.displayEpisodes() }
        </Card.Group>
      </Container>
    );
  }
}

export default Home;
