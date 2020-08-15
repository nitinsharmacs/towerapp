import React from 'react';
import classes from './flats.css';
import { connect } from 'react-redux';
import Flat from './Flat/Flat';


const Flats = props => {
	return (
		<div className={classes.Flats}>

			{
				props.flats.map(flat=><Flat selectedSize={props.size} {...flat} />)
			}
		</div>
		);
};

const mapStateToProps = state => {
	return {
		size:state.size
	}
};

export default connect(mapStateToProps)(Flats);