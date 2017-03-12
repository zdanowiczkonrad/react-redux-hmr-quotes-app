import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'quotes',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Quotes = require('./quotes').default
      const reducer = require('./reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'quotes', reducer })

      /*  Return getComponent   */
      cb(null, Quotes)

    /* Webpack named bundle   */
    }, 'quotes')
  }
})
