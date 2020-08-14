import React, { Component } from 'react';
import classes from './App.css';
import Towers from './containers/Towers/Towers';
import Filter from './containers/Filter/Filter';
import Viewer from './containers/Viewer/Viewer';


class App extends Component {
  render(){
    return (
        <div className={classes.App}>
        	<div className={classes.Column}>
        		<Towers />
        		<Filter />
        	</div>
        	<Viewer />
        </div>
      );
  }
}

export default App;