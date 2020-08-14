import React from 'react';
import classes from './towerlist.css';
import Tower from './Tower/Tower';
import { towers } from '../../data/testData';

const TowerList = props => {
	
	return (
			<div className={classes.Towers}>
				{
					towers.map(tower=><Tower {...props} {...tower} />)
				}
			</div>
		);
};


export default TowerList;