import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap/';
import Weather from './components/Weather';
import Movie from './components/Movie';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      findQuery: '',
      dataLoc: '',
      showMap: false,
      notFoundError: false,
      displayWeather: false,
      displayMovie: false,
      weatherInfo: [],
      movieInfo: [],
      latitude: '',
      longitude: '',

    }

  }

  callLocation = async (prv) => {
    prv.preventDefault();
    let serverPort = process.env.REACT_APP_SERVER;
    console.log(serverPort);


    let getUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.4e4dd19b6c2d803499c2e0249f1a1804&q=${this.state.findQuery}&format=json`;

    // let weahtherData = await axios.get(`${serverPort}/weather`,{params:{cityName:this.state.findQuery}});
    try {
      let locOutcome = await axios.get(getUrl);

      this.setState({
        dataLoc: locOutcome.data[0],
        showMap: true,

      })

      console.log(this.state.dataLoc);


    } catch {
      this.setState({
        showMap: false,
        notFoundError: true,

      })


    }

    try {
      let weatherData = await axios.get(`${serverPort}/weather?cityName=${this.state.findQuery}`);


      this.setState({
        weatherInfo: weatherData.data,
        displayWeather: true,

      })

      console.log(this.state.weatherInfo);



    }
    catch {
      this.setState({
        showMap: false,
        notFoundError: true,
        displayWeather: false,
      })
      console.log('weather error');
    }

    try {
      let movieData = await axios.get(`${serverPort}/movie?cityName=${this.state.findQuery}`);

      this.setState({
        movieInfo: movieData.data,
        displayMovie: true,
      })

      // console.log(this.state.movieData);


    }
    catch {
      this.setState({
        showMap: false,
        notFoundError: true,
        displayWeather: false,
        displayMovie: false,

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
          <Card style={{ width: '20rem', height:'35rem' }}>
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
        {this.state.displayWeather &&
          <Weather weatherData={this.state.weatherInfo} />
        }

        {this.state.displayMovie &&
          <Movie movieData={this.state.movieInfo} />

        }


      </>
    )
  }
}


export default App;

