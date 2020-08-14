import React, { Component } from 'react';
import classes from './towers.css';
import { connect } from 'react-redux';
import TowerList from '../../components/TowerList/TowerList';
import { selectTower } from '../../store/actions/actions';


class Towers extends Component {

	

	render(){
		return (
			<div className={classes.Towers}>
				<TowerList selectTower={this.props.selectTower} towers={this.props.towers} />
			</div>
			);
	}
}

const mapStateToProps = state => {
	return {
		towerId:state.towerId
	}
};

const mapDispatchToProps = dispatch => {
	return {
		selectTower:towerId=>dispatch(selectTower(towerId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Towers);