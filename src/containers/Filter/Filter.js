import React, { Component } from 'react';
import classes from './filter.css';
import { connect } from 'react-redux';
import { applyFilter } from '../../store/actions/actions';

class Filter extends Component {
	render(){
		return (
			<div className={classes.Filter}>
				<div className={classes.Header}>
					<h1>Unit Type</h1>
				</div>
				<div className={classes.Units}>
					<div className={classes.Unit}>
						<input type='checkbox' value="1000" name='checkbox' checked={+this.props.size===1000} onChange={()=>this.props.applyFilter(1000)} />
						<p for='1000'>Size (1000 Sq.Ft.)</p>
					</div>
					<div className={classes.Unit}>
						<input type='checkbox' value="1500" name='checkbox' checked={+this.props.size===1500} onChange={()=>this.props.applyFilter(1500)} />
						<p for='1500'>Size (1500 Sq.Ft.)</p>
					</div>
				</div>
			</div>
			);
	}
}

const mapStateToProps = state => {
	return {
		size:state.size
	}
};

const mapDispatchToProps = dispatch => {
	return {
		applyFilter:size=>dispatch(applyFilter(size))
	}
};
	
export default connect(mapStateToProps, mapDispatchToProps)(Filter);