import { IAppStore } from './reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const appSelector = createFeatureSelector<IAppStore>('app');

export const namesSelector = createSelector(appSelector, (e) => e.names);

