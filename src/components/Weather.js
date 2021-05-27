
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';


class Weather extends React.Component {


  render() {

    return (
      <>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Weather</Card.Title>

            <Card.Text>

              {this.props.weatherData.map(item => (
                <div>
                  <p>day {item.date}</p>
                  <p>description {item.description}</p>

                </div>


              ))}

              {/* First Day: {this.newWeatherArr.date}<br />
            First Day: {this.newWeatherArr[0].discription}<br />

            Second Day: {this.newWeatherArr[1]}<br />
            Second Day: {this.newWeatherArr[1]}<br />

            Third Day: {this.newWeatherArr[2]}<br />
            Third Day {this.newWeatherArr[2]}<br /> */}
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
