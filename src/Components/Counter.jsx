import React,{ PureComponent } from 'react';

class Counter extends PureComponent{
    render() 
    {
        console.warn("re-render")
        return (
            <div>
             <h1>counter copmonets {this.props.count}</h1>
             {/* <h1>Counter</h1> */}
            </div>
        );
    }
}

export default Counter;
