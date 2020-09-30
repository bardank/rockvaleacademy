import React from 'react';

import '../assets/scss/bootstrap.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.scss';
import "react-image-gallery/styles/css/image-gallery.css";

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
function MyApp({ Component, pageProps }) {
    return (
      <React.Fragment>
        <Navbar/>
        <Component {...pageProps} />
        <Footer />
      </React.Fragment>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp