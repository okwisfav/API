import React from 'react'
import booking from '../src/imgs.jpg'

const Book = ({title, author}) =>{
   const clickHandler = (e) => {
      console.log(e);
      console.log(e.target);
      alert('hello world');
   };
   const complexExample = (author) => {
      console.log(author);
   };
   return (
   <article className="book">
        <img 
          src={booking}/>
          <h1 onClick={() => console.log(title)}>{title}</h1>
          <h4>{author}</h4>
          <button type='button' onClick={clickHandler}>
            reference example
          </button>
          <button type='button' onClick={() => complexExample(author)}>more complex example</button>
   </article>
   );
};


export default Book