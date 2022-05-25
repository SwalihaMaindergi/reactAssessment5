import React, { useState } from 'react';

function HOC() {
    return (
        <>
        <h1>React Higher Order Component (HOC)</h1>
        <p>A Higher-Order Component is a function that takes a component and returns a new component.</p>
        <p>React.js HOC is the advanced method of reusing the component functionality logic. 
            It simply takes the original component and returns the enhanced component. A HOC allows for reusability since in real-life applications  
            there is a need to re-use the same functionalities in various similar kinds of components. A very common functionality is toggling.</p>
            
        <HOCRed cmp={Counter} />
        <HOCHotpink cmp={Counter} />
        <HOCGreen cmp={Counter} />
        </>
       
    );
}


function HOCRed(props) {
    return <h2 style={{ backgroundColor: 'red' }}><props.cmp /></h2>
}
function HOCHotpink(props) {
    return <h2 style={{ backgroundColor: 'hotpink' }}><props.cmp /></h2>
}
function HOCGreen(props) {
    return <h2 style={{ backgroundColor: 'green' }}><props.cmp /></h2>
}
function Counter() {
    const [count, setCount] = useState(0)
    return <div>
        <h2>{count}</h2>
        <button type="button" class="btn btn-primary" onClick={() => setCount(count + 1)}>UPDATE</button>
    </div>
}

export default HOC;