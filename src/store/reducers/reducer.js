import * as A from '../actions/actionTypes';

const initialStates = {
	towerId:'towerA',
	size:null
};


const reducer = (state=initialStates, action={}) => {
	switch(action.type){
		case A.SELECT_TOWER:
			return {...state, towerId:action.towerId};
		case A.APPLY_FILTER:
			return {...state, size:state.size===action.size?null:action.size};
		default:
			return state;
	}
};

export default reducer;