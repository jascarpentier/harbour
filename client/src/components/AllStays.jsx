import React from 'react';
import { stayInfo } from '../services/api-helper';
import { Link } from 'react-router-dom';

class AllStays extends React.Component {
  constructor() {
    super();
    this.state = {
      stays: [],
      stayData: {
        id: "",
        name: "",
        location: "",
        description: "",
        url_to_image: ""
      },
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
        <h1 className="staysHeader">Hostels</h1>
        {this.state.stays.map(stay => (
          <div className='staything' key={stay.id} >


            <img className='stayimg' src="https://i.imgur.com/8eRdeIk.jpg" alt="yallow" />
            <h1>{stay.name}</h1>
            <Link className='moreDetails'
              to={`/stays/${stay.id}`}> Details </Link>


          </div>
        ))}
      </div>
    )
  }
}


export default AllStays; 