import { ADDITION, SUBTRACT, ISODD, ASYNCADD } from '../params_include'

// 创建同步addition
export const createAdditionAction = (value) => ({ type: ADDITION, data: value })

// 创建同步subtract
export const createSubtractAction = (value) => ({ type: SUBTRACT, data: value })

// 创建同步IsOdd
export const createIsOddAction = (value) => ({ type: ISODD, data: value })

// 创建异步AsyncAdd
export const createAsyncAddAction = (value, delay) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createAdditionAction(value))
    }, delay)
  }
}
