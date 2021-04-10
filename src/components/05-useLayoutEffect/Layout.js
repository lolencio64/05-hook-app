import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = (url) => {
   
   const {counter, increment} = useCounter(1);

   const [boxSize, setboxSize] = useState();

   const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

   const {author, quote} = !!data && data[0];
   //console.log(state)

   const pTag = useRef()

   useLayoutEffect(() => {
       setboxSize(pTag.current.getBoundingClientRect());
   }, [quote]);

   console.log(author,quote);
   return (
       <div>
           <h1>Layout Effect</h1>
           <hr />


    
        
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-2"
                    ref={pTag}
                > 
                    {quote} 
                </p>          
            </blockquote>
                    
            

            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente Quote
            </button>

            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>

       </div>
   )
}
