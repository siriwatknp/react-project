import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    process.env.NODE_ENV !== "production" ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
      :
      compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

export default () => {
  const store = createStore(rootReducer, enhancer)

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('./rootReducer', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}
