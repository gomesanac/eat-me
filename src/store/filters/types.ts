export enum FiltersTypes {
  FILTER_DATA = '@filters/FILTER_DATA',
  OPEN_FILTER = '@filters/OPEN_FILTER',
  CLOSE_FILTER = '@filters/CLOSE_FILTER'
}

export interface FilterActionType {
  type: FiltersTypes.FILTER_DATA
  filter: string
  search: string
}

export interface FiltersState {
  readonly filter: string
  readonly search: string
  readonly searching: boolean
};
