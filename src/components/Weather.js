
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    newWeatherArr: this.props.weatherData
    }
  }

  render() {

    return (
      <>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Weather</Card.Title>

            <Card.Text>
            First Day: {this.props.weatherData[0].date}<br />
            First Day: {this.props.weatherData[0].description}<br />

            Second Day: {this.props.weatherData[1].date}<br />
            Second Day: {this.props.weatherData[1].description}<br />

            Third Day: {this.props.weatherData[2].date}<br />
            Third Day {this.props.weatherData[2].description}<br />
            </Card.Text>

            <Card.Text>
              {this.props.weatherData.data}
            </Card.Text>

          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Weather;
