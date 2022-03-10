import { RootReducer } from '..';


export const getCounterValue = (state: RootReducer) => state?.counter?.value || 0;
