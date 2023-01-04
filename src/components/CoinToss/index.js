import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0}

  result = true

  toss = () => {
    const no = Math.floor(Math.random() * 2)

    if (no === 0) {
      this.result = true
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.result = false
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {total, heads, tails} = this.state

    return (
      <div className="mainContainer">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {this.result && (
            <img
              className="coinimg"
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            />
          )}
          {!this.result && (
            <img
              className="coinimg"
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            />
          )}
          <button className="button" type="button" onClick={this.toss}>
            Toss Coin
          </button>
          <div className="resultContainer">
            <p className="resultTab">Total: {total}</p>
            <p className="resultTab">Heads: {heads}</p>
            <p className="resultTab">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
