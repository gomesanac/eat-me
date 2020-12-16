export enum FiltersTypes {
  FILTER_DATA = '@filters/FILTER_DATA',
  OPEN_FILTER = '@filters/OPEN_FILTER',
  CLOSE_FILTER = '@filters/CLOSE_FILTER',
}

export interface OpenFilter {
  type: FiltersTypes.OPEN_FILTER
}

export interface CloseFilter {
  type: FiltersTypes.CLOSE_FILTER
}

export interface FilterData {
  type: FiltersTypes.FILTER_DATA
  payload: {
    filter: string
    search: string
  }
}

export type FiltersAction = OpenFilter | CloseFilter | FilterData;

export interface FiltersState {
  readonly filter: string
  readonly search: string
  readonly searching: boolean
};
