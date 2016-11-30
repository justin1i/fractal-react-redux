/**
 * 常量
 */
export const LOCATION_CHANGE = 'LOCATION_CHANGE';

/**
 * 动作
 */
export function locationChange(location = '/') {
  return {
    type: LOCATION_CHANGE,
    payload: location,
  };
}

/**
 * 特殊动作
 */
export const updateLocation = ({ dispatch }) => (nextLocation) =>
  dispatch(locationChange(nextLocation));

/**
 * Reducer
 */
const initialState = null;
export default function locationReducer(state = initialState, action) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state;
}
