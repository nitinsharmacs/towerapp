import React from 'react';
import classes from './tower.css';
import TowerImg from '../../../assets/img/tower.jpg';


const Tower = props => {
	return (
		<div className={classes.Tower} onClick={()=>props.selectTower(props.id)}>
			<div className={classes.TowerImg}>
				<img src={TowerImg} alt={props.id} />
			</div>
			<div className={classes.TowerName}>
				<p>{props.name}</p>
			</div>
		</div>
		);
};

export default Tower;