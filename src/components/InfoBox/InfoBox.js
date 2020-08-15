import React from 'react';
import classes from './infobox.css';

const InfoBox = props => {
	return props.show?<div className={classes.InfoBoxDiv} onClick={()=>{
		props.close()
	}}>
		<div className={classes.InfoBox} style={{transform:`translate3d(${props.location.x}px, ${props.location.y}px, 0)`, background:props.status==='sold'?'#ffc8c8':'white'}} onClick={e=>{
			e.stopPropagation();
		}}>
			<div className={classes.Header}>
				<p>{`${props.name} (${props.size}Sq.Ft)`}</p>
				<p style={{color:props.status==='available'?'green':'black'}}>{props.status}</p>
			</div>
			{
				props.status!=='sold'?<div className={classes.Info}>
				<table>
					<tr>
						<td>Unit Cost</td>
						<td>&#8377; {props.unitCost}</td>
					</tr>
					<tr>
						<td>Booking Amount</td>
						<td>&#8377; {props.bookingAmount}</td>
					</tr>
					<tr>
						<td><b>Blocking Amount</b></td>
						<td>&#8377; {props.blockAmount}</td>
					</tr>
				</table>
			</div>:null
			}
		</div>
	</div>:null
};

export default InfoBox;