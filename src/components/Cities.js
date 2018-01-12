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

class Cities extends Component {
  state = { cities: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/cities')
      .then( res => {
        this.setState({ cities: res.data })
        console.log(res.data);
    })
      .catch(err => {
        console.log(err.response);
  });
}

displayCities = () => {
  return this.state.cities.map( city => {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            {city.name}
            <hr />
            {city.type}
          </Card.Header>
          <Card.Description>
            More Info: <a>{city.link}</a>
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
        <Header as='h3' textAlign='center'>Cities</Header>
        <Card.Group stackable itemsPerRow={3}>
          { this.displayCities() }
        </Card.Group>
      </Container>
    );
  }
}

export default Cities;
