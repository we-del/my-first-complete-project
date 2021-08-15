// 从redux引用createStore用于创建核心对象
import { applyMiddleware, createStore, Middleware } from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(reducers,
  composeWithDevTools(applyMiddleware(thunk)))