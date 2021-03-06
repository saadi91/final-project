import React, { Component,radix } from "react";
import { Button, Modal,FormControl,MenuItem,DropdownButton,ButtonToolbar} from "react-bootstrap";
import "../pages-css/LeaguesMatches.css";


//Match component containes match details (match time, teams, vote button)
const Match = ({ time, team1, team2, onVote }) =>
  <div className="match">
      <div className="item time">{time}</div>
      <div className="item team-logo1">
        <img className="logo-club" src={team1.image} alt="club" />
      </div>
      <div className="item team-name1">{team1.name}</div>
      <div className="item vs">vs</div>
      <div className="item team-name2">{team2.name}</div>
      <div className="item">
        <img className="logo-club team-logo2" src={team2.image} alt="club" />
      </div>
{/* pass VoteOut component */}
      <VoteOut
        team1={team1}
        team2={team2}
        onClick={onVote}
      />

  </div>
//match component containes team1 & team2 objects (time, name, images)
const match = (time,team1,team2) => {
  return {
    key:Math.random(),
    time,
    team1:{ name: team1, image: require('../images/'+team1+'.jpg') },
    team2:{ name: team2, image: require('../images/'+team2+'.jpg') }
  }
}
//league componet containes league title(name), league image and matches of a league
const league = ( title, image, ...matches) => {
  const slug = title.toLowerCase().replace(/\s+/g,'-')
  return {
    key:slug,
    title,
    image:require("../images/"+image),
    matches
  }
}
// leagues array containes objects of league componet with details of each league
// and matches that it has
const leagues = 
 [
  league('Lebanese Basketball Federation','lebanese-basketball-federation.jpg',
    match('6:00 PM','Champville','AlRiyadi'),
    match('9:30 PM','Byblos','Tadamon')
  ),
  league('National Basketball Association','nba.png',
    match('3:00 PM','Minnesota','Denver'),
    match('5:00 PM','Warriors','Boston'),
    match('8:00 PM','Los Angeles','Cavaliers')
  ),
  league('Euro League','euro-league.jpg',
  match('2:30 PM','Fenerbahce','zalgiris'),
  match('7:15 PM','CSKA','FC Barcelona'),
  match('10:00 PM','KK Partizan','Olympiakos')
)
]

let filterLeague = (evt,i) => leagues.filter(leagueArr => {
  
  if (leagueArr[i] === evt.target.key) {
    console.log(leagueArr)
  }

});
// even = [2,4,6]

// date = () => {
//   <span>
//     {new Date().toLocaleDateString()}
//   </span>
// }

const LeagueWithMatches = ({ onVote, image, title, matches,lebaneseFilter,nbaFilter }) =>
  <div className="matches-of-the-league">
  <div className="league">
    <img className="league-logo item" src={image} alt="league-logo"/>
    <h3 className=" league-title item">{title}</h3>
    <p className="matches-date item">Today </p>
  </div>
  { matches.map(match => <Match {...match} onVote={onVote}/>) }
</div>

const VoteOut = ({ team1, team2, onClick }) =>
  <div className="item vote-btn">
    <Button bsStyle="primary" onClick={() => onClick(team1, team2)}>Vote</Button>
  </div>



 class LeaguesMatches extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isVote: false,
      inputValue: '',
      inputValue2:'',
      team1:{},
      team2:{} ,
      lebaneseFilter:'',
      nbaFilter:'',
      showDoneVoted: false
    }
  }
  // open the model when click vote-btn
  voteUserIn = (team1, team2) => {
    this.setState({ isVote: true, team1, team2 })
  }
  // close the model and return values to null
  voteUserOut = () => {
    this.setState({ isVote: false,showDoneVoted: true,inputValue: '',inputValue2: '' })
    
  }
  //contain a first value that user inputted
  startValue = (evt) => {
    this.setState({ inputValue: evt.target.value })
  }
//contain a second value that user inputted
  startValue2 = (evt) => {
    this.setState({ inputValue2: evt.target.value })
  }
  showLebaneseLeague = (lebaneseFilter) => {
    // console.log('lebaneseFilter',lebaneseFilter)
    this.setState({lebaneseFilter, nbaFilter:''})
  }
  showNbaLeague = (nbaFilter) => {
    // console.log('lebaneseFilter',lebaneseFilter)
    this.setState({lebaneseFilter:'', nbaFilter})
  }
  showAll = () => {
    this.setState({lebaneseFilter:'', nbaFilter:''})
  }
  closeVoted = () => {
    this.setState({showDoneVoted: false})
  }
  renderLeagues = () => {
    const lbf = this.state.lebaneseFilter
    const nba = this.state.nbaFilter
    // const filteredLeagues = leagues.filter(single_league => {
      // console.log('lbf',lbf)
        if(lbf){ 
          return  (
            leagues.filter(single_league =>single_league.title === lbf).map(single_league =>
              <LeagueWithMatches showLebaneseLeague={this.showLebaneseLeague}{...single_league} onVote={this.voteUserIn}/>
          )
        )
        }else if(nba){
          return (
            leagues.filter(single_league =>single_league.title === nba).map(single_league =>
              <LeagueWithMatches showNbaLeague={this.showNbaLeague}{...single_league} onVote={this.voteUserIn}/>
          )
        )
        }else{
          return (
            leagues.map(single_league =>
              <LeagueWithMatches {...single_league} onVote={this.voteUserIn}/>
          ))
        }
    // })
    // console.log(filteredLeagues)
    
      // const reactLeagues = filteredLeagues.map(league =>
      //   <LeagueWithMatches showLebaneseLeague={this.showLebaneseLeague}{...league} onVote={this.voteUserIn}/>
      // )
      // return reactLeagues;
  }
 
  render() {
    //convert values to number
    const a = parseInt(this.state.inputValue, radix)
    const b = parseInt(this.state.inputValue2, radix)
    
    //to tell users that they voted correctly
   
    
    return (

    
        <div>
        <div className="select-league">
        <ButtonToolbar className="Select-League">
          <DropdownButton pullRight
            bsStyle="primary"                
            bsSize="small"
            title="Select League"
            id="dropdown-size-small"
          >
            <MenuItem eventKey='1'onClick={this.showAll}>All</MenuItem>
            <MenuItem eventKey="2" onClick={() =>this.showLebaneseLeague('Lebanese Basketball Federation')}>LBF</MenuItem>
            <MenuItem eventKey="3"onClick={() =>this.showNbaLeague('National Basketball Association')}>NBA</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div> 

 
        <div>
        <div className="matches">
          {this.renderLeagues()}
        </div>
      <div className="vote-modal">
        <Modal show={this.state.isVote} onHide={this.voteUserOut}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>from:</label>
            <input min="2" type="number" onChange={this.startValue} value={a} 
            name="first-number" className="number">
            </input>
            <label>to:</label>


            <input min="2" type="number"  value={a + 30} name="second-number" className="number"></input>
            <img className="logo-club" src={this.state.team1.image} alt="club" />
            <span>V</span>
            <img className="logo-club" src={this.state.team2.image} alt="club" />
            <label>from:</label>
            <input min="2" type="number" onChange={this.startValue2} value={b} name="first-number" className="number"></input>
            <label>to:</label>
            <input min="2" type="number"  value={b + 30} name="second-number" className="number"></input>
            <FormControl componentClass="select" placeholder="select" className="winer-team">
              <option value="select">Select</option>
              <option value="other">{this.state.team1.name}</option>
              <option value="other">{this.state.team2.name}</option>
            </FormControl>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.voteUserOut}>Close</Button>
            <Button bsStyle="primary" onClick={this.voteUserOut}>OK</Button>
          </Modal.Footer>
        </Modal>
        </div>
 <Modal show={this.state.showDoneVoted} onHide={this.closeVoted}>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <img src={require("../images/ok.png")} class="check-circle"></img> 
              <Modal.Title>Great, Your vote has been submited</Modal.Title>
              </Modal.Body>

              <Modal.Footer>
                <Button bsStyle="primary" onClick={this.closeVoted}>OK</Button>
              </Modal.Footer>
            </Modal>
      </div>
</div>
    )
  }
}

export default LeaguesMatches;
