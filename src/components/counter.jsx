import React, { Component } from 'react'

export default class Counter extends Component {
  addition = () => {
    let num = this.selectNumber.value
    // 发出数据给store   使用action函数封装意义在于减少变量在主程序中的出现
    this.props.addition(num * 1)
  }
  subtract = () => {
    let num = this.selectNumber.value
    this.props.subtract(num * 1)
  }
  isOdd = () => {
    let { count } = this.props
    if (count % 2) {
      let num = this.selectNumber.value
      this.props.addition(num * 1)
    }
  }
  asyncAdd = () => {
    let num = this.selectNumber.value
    this.props.asyncAdd(num * 1, 1000)
  }
  render() {
    console.log(this.props)
    return (
      <div className="app">
        <h1>当前计数为{this.props.count},第一是{this.props.person[0].name}</h1>
        <section>
          <select ref={selectNumber => this.selectNumber = selectNumber}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.addition}>+</button>&nbsp;
          <button onClick={this.subtract}>-</button>&nbsp;
          <button onClick={this.isOdd}>addition if odd</button>&nbsp;
          <button onClick={this.asyncAdd}> addition async</button>
        </section>
      </div>

    )
  }
}