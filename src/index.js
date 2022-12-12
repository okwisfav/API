import React from "react";
import  ReactDOM  from "react-dom";
import Book from "./Book";
// Nested Components, React Tools 
import './index.css'

// book data
import {data} from './books'


function BookList(){
   return(
     <section className='booklist'>
         {data.map((book, index) => {
            return <Book key={book.id} {...book}></Book>
         })}
     </section>
   )
}




ReactDOM.render(<BookList />, document.getElementById('root')
);