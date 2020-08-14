import React, { Component } from 'react';
import classes from './viewer.css';
import { connect } from 'react-redux';
import Floor from '../../components/Floor/Floor';
import { data } from '../../data/testData';

class Viewer extends Component {
	state = {
		towerData:data
	}
	render(){
		let selectedTower = data.find(dat=>dat.id===this.props.towerId);
		return (
			<div className={classes.Viewer}>
				<div className={classes.Header}>
					<h1>{selectedTower.name}</h1>
				</div>
				<div className={classes.Content}>
					<div className={classes.Floors}>
						{
							selectedTower.floors.map(floor=><Floor {...floor} />)
						}
					</div>
					<div className={classes.Shadow}>
					</div>
				</div>
			</div>
			);
	}
}

const mapStateToProps = state => {
	return {
		towerId:state.towerId
	};
};

export default connect(mapStateToProps)(Viewer);