import React from 'react';
import './footer.css';
import { Link, withRouter } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const currentTab = (history, path) => {
   if (history.location.pathname === path) {
      return {
         color: '#ed1c24',
      };
   } else {
      return {};
   }
};

const Navbar = ({ history }) => {
   const { t } = useTranslation();
   return (
      <div>
         <nav className='navbar navbar-expand-lg '>
            <Link
               className='navbar-brand ml-5'
               to='/'
               style={{
                  color: 'black',
                  textAlign: 'center',
               }}
            >
               {/* <img
            src={logo}
            alt=""
            style={{
              height: "4rem",
            }}
          /> */}
               <h4 style={{ fontWeight: 'bold' }}>ABC</h4>
               <h6 style={{ lineHeight: 0 }}>LOGO</h6>
            </Link>
            <button
               className='navbar-toggler navbar-light'
               type='button'
               data-toggle='collapse'
               data-target='#navbarNavAltMarkup'
               aria-controls='navbarNavAltMarkup'
               aria-expanded='false'
               aria-label='Toggle navigation'
            >
               <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
               <div className='navbar-nav ml-auto'>
                  <Link
                     className='nav-item nav-link'
                     to='/'
                     style={currentTab(history, '/')}
                  >
                     {t('home.label')}{' '}
                     <span className='sr-only'>(current)</span>
                  </Link>
                  <div className='dropdown'>
                     <Link
                        className='nav-item nav-link'
                        to='/'
                        style={currentTab(history, '/products')}
                     >
                        {t('product.label')}{' '}
                        <span className='sr-only'>(current)</span>
                     </Link>
                     <div className='dropdown-content'>
                        <Link to='#'>{t('porceliantiles.label')}</Link>
                        <Link to='#'>{t('ceramic.label')}</Link>
                     </div>
                  </div>
                  <Link
                     className='nav-item nav-link'
                     to='/'
                     style={currentTab(history, '/we-are')}
                  >
                     {t('weare.label')}
                  </Link>
                  <Link
                     className='nav-item nav-link'
                     to='/about-us'
                     style={currentTab(history, '/about-us')}
                  >
                     {t('about.label')}
                  </Link>
                  <Link
                     className='nav-item nav-link'
                     to='/contact-us'
                     style={currentTab(history, '/contact-us')}
                  >
                     {t('contactus.label')}
                  </Link>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default withRouter(Navbar);
