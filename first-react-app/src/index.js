import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css';

// special function with name of function start with capital letter
// stateless functional component
// always return JSX
//always return single element
//

function BookList(){
 
  return (
   <section className='booklist'>
    <Book/>
    <Book/>
    <Book/>

   </section>

  );

}

function Book(){

  return (
    <article className='book'>
       <Cover/>
       <Title/>
       <Author/>
     </article>
    );
}

const Cover =() => {
  return <img src="https://rukminim1.flixcart.com/image/612/612/kpodocw0/book/g/p/c/macroeconomics-sie-22nd-edition-original-imag3uzquthwzwzk.jpeg?q=70" alt="mobileImge"/>

}

const Title = () => <h1>Macroeconomics ( SIE ) | 22nd Edition</h1>

const Author = () => <h4>McConnell Campbell R, Brue Stanley L.</h4>

// inject component to index.html to render
ReactDom.render(<BookList/>,document.getElementById('root'));