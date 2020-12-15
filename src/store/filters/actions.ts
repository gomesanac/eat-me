import { Action } from 'redux';
import { FiltersTypes, FilterActionType } from './types';

export const openFilter = (): Action => ({
  type: FiltersTypes.OPEN_FILTER,
});

export const closeFilter = (): Action => ({
  type: FiltersTypes.CLOSE_FILTER,
});

export const filterData = (filter: string, search: string): FilterActionType => ({
  type: FiltersTypes.FILTER_DATA,
  filter,
  search,
});
