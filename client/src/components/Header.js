import React from 'react';
import Navbar from './Navbar';
import './style/Header.css'
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';

const Header=()=>{

  const  onSelectLanguage=(languageCode)=>{
        console.log(languageCode)
    }
    
    return(
        <div className="header">
            <div className="topMenu">
                <div className="tel">
                    <i className="fas fa-phone"></i>
                <a href="tel:+1-555-555-1212">555-555-1212</a>
                </div>
            {/* <ReactLanguageSelect
    defaultLanguage="en"
    showSelectedLabel={true}
    languages={["en", "fr", "de", "it", "es", "ru"]}
    onSelect={onSelectLanguage} /> */}
            </div>
            <Navbar/>
        </div>
    )
}

export default Header;