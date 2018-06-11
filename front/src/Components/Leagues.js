import React from "react";
import Page from "./Page";
import "../pages-css/Leagues.css"
import { Link, Route } from 'react-router-dom'
import {Table} from 'react-bootstrap'


const leagues = [
  { id:'none',
    title:'not found',
    text:'the id you provided'
  },
  { id:'lebanese-basketball-federation',
    title:'Lebanese Basketball Federation',
    
  },
  { id:'national-basketball-association',
    title:'National Basketball Association',
    
  },
  { id:'basketball-champions-league',
  title:'Basketball Champions League',
  
  },
  { id:'euroCup-basketball',
  title:'EuroCup Basketball',
  },
  { id:'international-fasketball-federation',
  title:'International Basketball Federation',
  }
]
  const schedule = (
    <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Teams</th>
        <th>Location</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>20/4/18</td>
        <td>Al Riyadi @ Byblos</td>
        <td>Beirut</td>
        <td>6:00 AM</td>
      </tr>
      <tr>
        <td>2</td>
        <td>20/4/18</td>
        <td>Al Riyadi @ Byblos</td>
        <td>Beirut</td>
        <td>6:00 AM</td>
      </tr>
      <tr>
        <td>3</td>
        <td>20/4/18</td>
        <td>Al Riyadi @ Byblos</td>
        <td>Beirut</td>
        <td>6:00 AM</td>
      </tr>
    </tbody>
  </Table>
  )
const LeaguePage = ({ match }) => {
  const id = match.params.leagueName
  const league = leagues.find( league => league.id === id ) || leagues[0]
  const { title } = league
  return (<div className="schedule-league">
      <h3>{title}</h3>
      {schedule}
  </div>)
}



const Leagues = ({match}) => (
  <Page title="leagues" className="leagues">  

<h3 className="select-league">Please select a League</h3>
    <div className="all-leagues">
    <div className="league league1">
      <Link to={`${match.url}/lebanese-basketball-federation`}>
      <img className="league-logo" src={require("../images/flb.jpg")} alt="league-logo"/>
      <h3 className="league-name">Lebanese Basketball Federation</h3></Link>
    </div>

    <div className="league league2">
    <Link to={`${match.url}/national-basketball-association`}>
    <img className="league-logo" src={require("../images/nba.png")} alt="league-logo"/>
      <h3 className="league-name">National Basketball Association</h3></Link>
    </div>

    <div className="league league3">
    <Link to={`${match.url}/basketball-champions-league`}>
    <img className="league-logo" src={require("../images/champion-leagues.jpg")} alt="league-logo"/>
      <h3 className="league-name">Basketball Champions League</h3></Link>
    </div>

    <div className="league league4">
    <Link to={`${match.url}/euroCup-basketball`}>
    <img className="league-logo" src={require("../images/eurocup.jpg")} alt="league-logo"/>
      <h3 className="league-name">EuroCup Basketball</h3></Link>
    </div>

    <div className="league league5">
    <Link to={`${match.url}/international-fasketball-federation`}>
    <img className="league-logo" src={require("../images/fiba.png")} alt="league-logo"/>
      <h3 className="league-name">International Basketball Federation</h3></Link>
    </div>

    </div>
    <hr/>
    <Route path={`${match.url}/:leagueName`} component={LeaguePage} />
    <Route
      exact
      path={match.path}
     />
    <hr/>
    
 </Page>
);

export default Leagues;