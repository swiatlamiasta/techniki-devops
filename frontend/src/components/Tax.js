import React, { Component } from "react";
import axios from 'axios';

class Tax extends Component {
    constructor(props) {
      super(props);
      this.state = {
        income: 0,
        type: 'firstthreshold',
        tax: 0
      }
    };
    callAPI = async () => {
      await axios.get(`/api/incometax?income=${this.state.income}&type=${this.state.type}`)
          .then(res => {
            console.log(res)
            this.setState({tax: res.data.value});
          })
          .catch(error => {
            console.log(error.response)
          });
    };
    handleChangeincome = (e) =>{
      console.log(e.target)
      this.setState({income: e.target.value});
    }
    handleChangeType = (e) =>{
      console.log(e.target)
      this.setState({type: e.target.value});
    }
    render() {
      return (
        <div>
          Obliczenie podatku dochodowego:
          <input value={this.state.income || 0} onChange={(e) => this.handleChangeincome(e)}></input>
            Umowa:
            <select value={this.state.type} onChange={(e) => this.handleChangeType(e)}>
              <option value='firstthreshold'>pierwszy próg</option>
            </select>
            <button onClick={this.callAPI}>Oblicz</button>
            <br/>
            Wartość:
            {this.state.tax}

        </div>
      );
    }
}

export default Tax;