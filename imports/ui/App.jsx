import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Redirect } from 'react-router';
import ChallengesList from './MainElements/ChallengesList.jsx';
import CreateChallenge from './CreatorElements/CreateChallenge.jsx';
import LandingPage from './MainElements/LandingPage.jsx'
import AssignSale from './MainElements/AssignSale.jsx';
import SingleChallenge from './MainElements/SingleChallenge.jsx';


const browserHistory = createBrowserHistory();
// App component - represents the whole app
class App extends Component {

  constructor(props) {
    super(props);
  }
// esta forma de hacer el routing me parece muy buena para implementarla en mis futuros proyectos tu proyecti fue muy bueno y realizaste cada una de las  funciones que proponias muy bien felicitaciones es codigo es inpecable
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <div>
            <Route exact path="/" component={MainRedirect}/>
            <Route exact path="/main" component={LandingPage}/>
            <Route exact path="/challenges" component={ChallengesList}/>
            <Route path="/sale/:challenge/sales" component={AssignSale}/>
            <Route path="/challenges/:name" component={SingleChallenge}/>
            <Route exact path="/publish" component={CreateChallenge}/>
            <Route path="/challenges/:challenge/sales" component={AssignSale}/>
            <Route exact path="/error" component={NotFound}/>
          </div>
        </Router>
      </div>
    );
  }
}

const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

const MainRedirect = () => (
  <Redirect push to="/main"/>);

export default App;
