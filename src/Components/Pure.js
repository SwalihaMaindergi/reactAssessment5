import React, { PureComponent } from 'react'

class Pure extends PureComponent {
    constructor() {
        super();
        this.state = {
            Data: 7
        }
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <div>
                    <h1>React Pure Component</h1>
                    <p>A React component is considered pure <b>if it renders the same output for the same state and props. </b> 
                    For this type of class component, React provides the PureComponent base class.</p>
                    <h2>Pure Component Data : {this.state.Data}</h2> <br></br>
                    <button type="button" class="btn btn-warning" onClick={() => this.setState({ Data: 7 })}>UPDATE STATE</button>
                </div>
            </div>
        );
    }
}

export default Pure;