import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card } from 'react-bootstrap/';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      findQuery: '',
      dataLoc: '',
      showMap: false,
      notFoundError: false

    }

  }


  callLocation = async (prv) => {
    prv.preventDefault();

    let getUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.4e4dd19b6c2d803499c2e0249f1a1804&q=${this.state.findQuery}&format=json`;

    try {

      let locOutcome = await axios.get(getUrl);

      this.setState({
        dataLoc: locOutcome.data[0],
        showMap: true
      })
    }


    catch {
      this.setState({
        showMap: false,
        notFoundError: true
      })
    }

  }




  updateFindQuery = (event) => {
    this.setState({
      findQuery: event.target.value
    })
  }



  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <Form onSubmit={this.callLocation}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Locations </Form.Label>
            <Form.Control placeholder="Enter location" onChange={this.updateFindQuery} />

          </Form.Group>
          <Button variant="primary" type="submit">
            Explor
          </Button>
        </Form>

        {this.state.showMap &&
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.318d7e351679b370b49a56a43771dcfc&center=${this.state.dataLoc.lat},${this.state.dataLoc.lon}`} />
            <Card.Body>
              <Card.Title>Locations</Card.Title>
              <Card.Text>
                {this.state.dataLoc.display_name}
              </Card.Text>
              <Card.Text>Latitude:{this.state.dataLoc.lat}</Card.Text>
              <Card.Text>Longtutde:{this.state.dataLoc.lon}</Card.Text>

            </Card.Body>
          </Card>
        }

       
      </>
    )
  }
}



export default App;

