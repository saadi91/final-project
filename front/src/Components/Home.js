import React, {Component} from 'react';
import Page from "./Page";
import LeaguesMatches from './LeaguesMatches';
import Result from './Result';

class Home extends Component {
    render() {
        return (
            <Page title="Home" className="Home">
           
          <LeaguesMatches />
          <Result />
        
          </Page>
        )
    }
}
export default Home;