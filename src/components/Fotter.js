import React from 'react';
import './footer.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
   faInstagram,
   faFacebook,
   faTwitter,
   faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
   const { t } = useTranslation();
   return (
      <div className='myfooter '>
         <div className='container'>
            <div className='row '>
               <div className='col-lg-3 col-md-6'>
                  <h5 className='footer-heading'>ABC CERAMIC</h5>
                  {/* <img
                     src={logo}
                     alt=''
                     style={{
                        height: '4rem',
                     }}
                  /> */}
                  <div
                     style={{
                        textAlign: 'center',
                        width: 'fit-content',
                        paddingLeft: 20,
                     }}
                  >
                     <h4 style={{ fontWeight: 'bold' }}>ABC</h4>
                     <h6 style={{ lineHeight: 0 }}>LOGO</h6>
                  </div>
                  <p className='socialMedia-icon mt-4'>
                     <a href='/' className='mr-3'>
                        <FontAwesomeIcon icon={faInstagram} />
                     </a>
                     <a href='/' className='mr-3'>
                        <FontAwesomeIcon icon={faFacebook} />
                     </a>
                     <a href='/' className='mr-3'>
                        <FontAwesomeIcon icon={faTwitter} />
                     </a>
                     <a href='/' className='mr-3'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                     </a>
                  </p>
               </div>

               <div className='col-lg-3 col-md-6'>
                  <h5 className='footer-heading'>{t('ourproduct.label')}</h5>
                  <ul>
                     <li>
                        <a href='/'>Soluble Salt Nano Tile</a>
                     </li>
                     <li>
                        <a href='/'>Double Charged Porcelain/Vitrified Tile</a>
                     </li>
                     <li>
                        <a href='/'>Digital Glazed Porcelain/Vitrified Tile</a>
                     </li>
                     <li>
                        <a href='/'>Full Body Porcelain/Vitrified Tile</a>
                     </li>
                     <li>
                        <a href='/'>Parking Tile</a>
                     </li>
                     <li>
                        <a href='/'>Step Riser & Wood Look Tile</a>
                     </li>
                     <li>
                        <a href='/'>Ceramic Digital Wall Tile</a>
                     </li>
                  </ul>
               </div>

               <div className='col-lg-3 col-md-6'>
                  <h5 className='footer-heading'>{t('weare.label')}</h5>
                  <ul>
                     <li>
                        <a href='/'>{t('importer.label')}</a>
                     </li>
                     <li>
                        <a href='/'>{t('distributor.label')}</a>
                     </li>
                     <li>
                        <a href='/'>{t('builder.label')}</a>
                     </li>
                     <li>
                        <a href='/'>{t('homeoffice.label')}</a>
                     </li>
                  </ul>
               </div>

               <div className='col-lg-3 col-md-6'>
                  <h5 className='footer-heading'>{t('contactus.label')}</h5>
                  <p>
                     ABC Ceramic Corporate Office ijk Business Park Second floor
                     Shop No. 150,151,152 8-C National Highway Near PQR Ceramic
                     XYZ 363636
                  </p>

                  <a href='mailto:info@iwinceramic.com'>
                     <FontAwesomeIcon className='mr-2' icon={faEnvelope} />
                     info@abc.com
                  </a>
                  <br />

                  <a href='tel:+919876543210'>
                     <FontAwesomeIcon className='mr-2' icon={faPhone} />
                     +9198765 43210
                  </a>
                  <br />
                  <a href='tel:+919876543210'>
                     <FontAwesomeIcon className='mr-2' icon={faPhone} />
                     +9198765 43210
                  </a>
               </div>
            </div>
         </div>
         <div className='copyright'>Copyright 2020</div>
      </div>
   );
};

export default Footer;
