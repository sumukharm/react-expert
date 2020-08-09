import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Timer extends Component {
    constructor(props) {
        super(props);
    }

    state = {count:0}

    Increment = (event) => {
        this.setState({ count : this.state.count + 1})
    }

    Decrement = (event) => {
        this.setState({ count: this.state.count - 1  })
    }

    render() {
        return (
            <div>
                <button onClick={this.Increment}>
                    Increment
                </button>

                <button onClick={this.Decrement}>
                    Decrement
                </button>

                <div>
                    value : {this.state.count}
                </div>
            </div>
        )
    }
}

export default Timer