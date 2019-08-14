import React from 'react';
import { stayInfo } from '../services/api-helper';
import { Link } from 'react-router-dom';

class AllStays extends React.Component {
  constructor() {
    super();
    this.state = {
      stays: []
    }
  }

  componentDidMount = async () => {
    const stays = await stayInfo();
    this.setState({
      stays: stays,
    })
  }

  render() {
    return (
      <div className='allStays'>
        <h1>stays</h1>
        {this.state.stays.map(stay => (
          <div key={stay.id} >
            <p>{stay.name}</p>
            <p>{stay.location}</p>

            <Link
              to={`/stays/${stay.id}`}> Details </Link>

          </div>
        ))}
      </div>
    )
  }
}


export default AllStays; 