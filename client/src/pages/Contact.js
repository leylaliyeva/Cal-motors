import React from "react";
import './style/Contact.css';
import {Container} from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
   <>
   <Header/>
    <div className="contactForm"> 
    <Container>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd2MYE0cgz_xkLJ66FVF_tZgYYXtObCK75MrnlxKF1tROtmLg/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
      >
        Loading…
      </iframe>
      </Container>
    </div>
    <Footer/>
   </>
  );
};

export default Contact;
