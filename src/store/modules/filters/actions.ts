import { action } from 'typesafe-actions';
import {
  FiltersTypes,
  OpenFilter,
  CloseFilter,
  FilterData,
} from './types';

export const openFilter = (): OpenFilter => action(FiltersTypes.OPEN_FILTER);

export const closeFilter = (): CloseFilter => action(FiltersTypes.CLOSE_FILTER);

export const filterData = (filter: string, search: string): FilterData => action(
  FiltersTypes.FILTER_DATA, { filter, search },
);
