import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'counter',
  /* 路由匹配时，异步调用 */
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/CounterContainer').default;
      const reducer = require('./modules/counter').default;

      injectReducer(store, { key: 'counter', reducer });

      /* 返回组件 */
      cb(null, Counter);

    /* webpack命名捆绑 */
    }, 'counter');
  },
});
