import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup'



class Movie extends React.Component {

  render() {
    return (
      <>
        {(this.props.movieData.length !== 0 && this.props.display) && this.props.movieData.map(item => {
          return (
            <Card style={{ width: '20rem', height:'35rem' }}>
              <Card.Img variant="top" src={item.posterPath} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Over View: {item.overview}
                </Card.Text>
              </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Average Votes: {item.averageVotes}</ListGroup.Item>
                <ListGroup.Item>🤩  Total Votes: {item.totalVotes}</ListGroup.Item>
                <ListGroup.Item>Popularity: {item.popularity}</ListGroup.Item>
                <ListGroup.Item> Release Date: {item.releaseDate}</ListGroup.Item>
              </ListGroup>
            </Card>
          )
        })}
      </>
    )
  }
}

export default Movie;


// class Movies extends React.Component {


//   render() {

//     return (
//       <>


//         <Card style={{ width: '20rem', height:'35rem' }}>
//           <Card.Body>
//             <Card.Title>Movies</Card.Title>
//             {/* {console.log(this.props.weatherData)} */}



//             {this.props.movieData.map((item, indx) => (
//               <Card.Text key={indx}>
//                 <Card.Title>{item.title}</Card.Title>
//                 <Card.Text>releaseDate: {item.releaseDate}</Card.Text>
//                 <Card.Text>  🤩 totalVotes : {item.totalVotes}</Card.Text>
//                 <img variant="top" src={item.imagePath} alt="loading" className='image' height={"300px"} width={"300px"} />
//               </Card.Text>

//             ))}

//             {/* First Day: {this.newWeatherArr.date}<br />
//               First Day: {this.newWeatherArr[0].discription}<br />

//               Second Day: {this.newWeatherArr[1]}<br />
//               Second Day: {this.newWeatherArr[1]}<br />

//               Third Day: {this.newWeatherArr[2]}<br />
//               Third Day {this.newWeatherArr[2]}<br /> */}


//             <Card.Text>
//               {this.props.movieData.data}
//             </Card.Text>

//           </Card.Body>
//         </Card>
//       </>
//     )
//   }
// }



// export default Movies;
