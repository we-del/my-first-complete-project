import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

//Provider,也可监听全局状态，且比subscribe高效
ReactDOM.render(<Provider store={store} >
  <App />
</Provider>, document.querySelector('#root'))

// Store下的subscribe实时监听全局，store的内部状态以改变就刷新
//Store.subscribe(() => ReactDOM.render(<App store={Store} />, document.querySelector('#root')))