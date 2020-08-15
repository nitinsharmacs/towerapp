import React, {useState} from 'react';
import classes from './flat.css';
import GreenFlat from '../../../../assets/img/greenFlat.jpg';
import GreyFlat from '../../../../assets/img/greyFlat.jpg';
import RedFlat from '../../../../assets/img/redFlat.jpg';
import InfoBox from '../../../InfoBox/InfoBox';


const Flat = props => {
	const [infoBox, showInfo] = useState(false);
	const [location, setLocation] = useState(null);
	const showInfoBox = (e) => {
		setLocation({
			x:e.clientX+270>window.innerWidth?e.clientX-270:e.clientX,
			y:e.clientY+162>window.innerWidth?e.clientY-162:e.clientY
		});
		showInfo(true);
	};
	const closeBox = () => {
		showInfo(false);
		setLocation(null);
	};
	let img = GreenFlat;
	let grey=false;
		if(props.status==='sold')
			img = RedFlat;
		if(props.selectedSize&&props.selectedSize!==props.size){
			img = GreyFlat;
			grey = true;
		}
			
	return (
		<div className={classes.Flat} onClick={grey?null:infoBox?null:showInfoBox}>
			<img src={img} />
			<InfoBox show={infoBox} close={closeBox} location={location} {...props} />
		</div>
		);
};

export default Flat;