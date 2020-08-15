import React from 'react';
import classes from './floor.css';
import Flats from './Flats/Flats';

const Floor = props => {
	return (
		<div className={classes.Floor}>
			<div className={classes.FloorName}>
				<p>{ props.name }</p>
			</div>
			<Flats flats={props.flats}  />
		</div>
		);
};

export default Floor;