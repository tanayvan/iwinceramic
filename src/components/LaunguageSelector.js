import React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function LaunguageSelector() {
   const changeLaunguage = (e) => {
      i18next.changeLanguage(e.target.value);
   };
   return (
      <div className='header '>
         <div className='header-container'>
            <div onChange={changeLaunguage} className='ml-3'>
               <select id='cars' style={{ borderRadius: '4px' }}>
                  <option value='en'>English</option>
                  <option value='ch'>Chinese</option>
                  <option value='sp'>Spanish</option>
                  <option value='ar'>Arabic</option>
                  <option value='fr'>French</option>
                  <option value='rs'>Russian</option>
               </select>
            </div>
            <a className='ml-3' href='mailto:info@iwinceramic.com'>
               <FontAwesomeIcon className='mr-2' icon={faEnvelope} />
               <span className='mail'>info@abc.com</span>
            </a>
            <a className='ml-3 ' href='tel:+919612833333'>
               <FontAwesomeIcon className='mr-2' icon={faPhone} />
               <span className='phone'> 987543210</span>
            </a>
         </div>
      </div>
   );
}
