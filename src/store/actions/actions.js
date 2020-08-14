import * as A from './actionTypes';

export const selectTower = (towerId) => {
	return {
		type:A.SELECT_TOWER,
		towerId:towerId
	}
};

export const applyFilter = (size) => {
	return {
		type:A.APPLY_FILTER,
		size:size
	}
};