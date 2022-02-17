import React from 'react'
import ReactDom from 'react-dom'

// special function with name of function start with capital letter
// stateless functional component
// always return JSX
//always return single element
//
function Book(){

  return (
     <div>
       <h1>This is my first Nested React Component</h1>
       <Cover/>
       <Title/>
       <Author/>
     </div>
    );
}

const Cover =() => {
  return <img src="https://rukminim1.flixcart.com/image/612/612/kpodocw0/book/g/p/c/macroeconomics-sie-22nd-edition-original-imag3uzquthwzwzk.jpeg?q=70" alt="mobileImge"/>

}

const Title = () => <h4>Macroeconomics ( SIE ) | 22nd Edition</h4>

const Author = () => <p>McConnell Campbell R, Brue Stanley L.</p>

// inject component to index.html to render
ReactDom.render(<Book/>,document.getElementById('root'));