import React from 'react';
import './card.css';

function Tiles({ className, title, subtitle, image }) {
   return (
      <div className={className}>
         <div className='tiles'>
            <div className='image-container'>
               <img
                  className='card-image'
                  width={'100%'}
                  src={image}
                  alt='Product'
               />
            </div>
            <div className='text-container ml-4 mt-3'>
               <h4 className='title'>{title}</h4>
               <p className='description '>{subtitle}</p>
            </div>
         </div>
      </div>
   );
}

export default Tiles;
