import React from 'react'
import ReactDom from 'react-dom'

// special function with name of function start with capital letter
// stateless functional component
// always return JSX
//always return single element
//
function Greeting(){

  return (
     <div>
       <h1>This is my first Nested React Component</h1>
       <Name/>
       <Message/>
     </div>
    );
}

const Name =() => {
  return <h4>Hello Maheshwar!</h4>
}

const Message = () => <p>Welcome to React world</p>

// inject component to index.html to render
ReactDom.render(<Greeting/>,document.getElementById('root'));