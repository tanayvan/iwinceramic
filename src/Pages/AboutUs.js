import React from 'react';
import Base from '../components/Base';

import office from '../assets/companyOffice.jpg';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
   const { t } = useTranslation();
   return (
      <Base>
         <div className='container my-5'>
            <div className='row'>
               <div
                  class='col-lg-12 my-5'
                  style={{ display: 'flex', justifyContent: 'center' }}
               >
                  <h1 className='text-center display-4 heading'>
                     {t('aboutus.label')}
                  </h1>
               </div>
               <div class='col-lg-6'>
                  <h1>ABC ceramic</h1>
                  <p className='mt-5'>{t('aboutusp1')}</p>
                  <p>{t('aboutusp2')}</p>
                  <p>{t('aboutusp3')}</p>
                  <p>{t('aboutusp4')}</p>
                  <button type='button' class='btn btn-dark btn-lg mt-5'>
                     {t('downloadcatalouge')}
                  </button>
               </div>
               <div class='col-lg-6'>
                  <div className='m-5'>
                     <img
                        src={office}
                        alt=''
                        style={{
                           width: '100%',
                        }}
                     />
                  </div>
               </div>
            </div>
         </div>
      </Base>
   );
}
