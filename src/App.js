import React from 'react';
import axios from 'axios';

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



render(){
  return (
    <>
      <h1>City Explorer</h1>
      <form onSubmit={this.callLocation}>
        <input type='text' placeholder='add a city' onChange={this.updateFindQuery} />
        <input type='submit' value='Find Location' />
      </form>

      <p>{this.state.dataLoc.display_name}</p>

      { this.state.showMap &&
        <img
          src={`https://maps.locationiq.com/v3/staticmap?key=f5de8e48adbdc6&center=${this.state.dataLoc.lat},${this.state.dataLoc.lon}`} alt=''
        />
      }
    </>
  )
}
}



export default App;

