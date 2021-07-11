import React from 'react';
import { useHistory } from 'react-router-dom';

import './WeAre.css';

function WeAre() {
   const history = useHistory();

   return (
      <div>
         <div className='row mt-4 pb-4'>
            <div className='col-lg-3'>
               <div className='card text-center'>
                  <div className='card-body'>
                     <h5 className='card-title'>Importer</h5>
                     <p className='card-text'>
                        Know more about how to import world-className tiles to
                        your country.
                     </p>
                     <p className='card-text'>
                        <small
                           className='muted'
                           onClick={() => history.push('about-us')}
                        >
                           Know more
                        </small>
                     </p>
                  </div>
               </div>
            </div>
            <div className='col-lg-3'>
               <div className='card text-center'>
                  <div className='card-body'>
                     <h5 className='card-title'>Distributor</h5>
                     <p className='card-text'>
                        Be a part of our ever growing distribution network
                        across India.
                     </p>
                     <p className='card-text'>
                        <small
                           onClick={() => history.push('about-us')}
                           className='muted'
                        >
                           know more
                        </small>
                     </p>
                  </div>
               </div>
            </div>
            <div className='col-lg-3'>
               <div className='card text-center'>
                  <div className='card-body'>
                     <h5 className='card-title'>Builder</h5>
                     <p className='card-text'>
                        Planning your next big building project? Our tiles are
                        made for you.
                     </p>
                     <p className='card-text'>
                        <small
                           onClick={() => history.push('about-us')}
                           className='muted'
                        >
                           know more
                        </small>
                     </p>
                  </div>
               </div>
            </div>
            <div className='col-lg-3'>
               <div className='card text-center'>
                  <div className='card-body'>
                     <h5 className='card-title'>Home/Office Owner</h5>
                     <p className='card-text'>
                        Get your house walls and floor embellished by our tiles.
                     </p>
                     <p className='card-text'>
                        <small
                           onClick={() => history.push('about-us')}
                           className='muted'
                        >
                           know more
                        </small>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default WeAre;
