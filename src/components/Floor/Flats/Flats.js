import React from 'react';
import classes from './flats.css';
import { connect } from 'react-redux';
import GreenFlat from '../../../assets/img/greenFlat.jpg';
import GreyFlat from '../../../assets/img/greyFlat.jpg';
import RedFlat from '../../../assets/img/redFlat.jpg';

const Flats = props => {
	return (
		<div className={classes.Flats}>

			{
				props.flats.map(flat=>{

					let img = GreenFlat;
					if(flat.status==='sold')
						img = RedFlat;
					if(flat.size>=props.size && props.size!==null)
						img = GreyFlat;
					return <div className={classes.Flat}>
					<img src={img} />
				</div>
				})
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