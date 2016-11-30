/**
 *  常量
 */
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

/**
 *  动作
 */
export function increment(value = 1) {
  return ({
    type: COUNTER_INCREMENT,
    payload: value,
  });
}

export const doubleAsync = () => (dispatch, getState) =>
  new Promise((resolve) => {
    setTimeout(() => {
      dispatch(increment(getState().counter));
      resolve();
    }, 200);
  });

export const actions = {
  increment,
  doubleAsync,
};

/**
 *  动作处理器
 */
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload,
};

/**
 *  Reducer
 */
const initialState = 0;
export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
