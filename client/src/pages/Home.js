import React from 'react'
import Slider from "react-slick";
import './style/Home.css'
import {Button} from '../components/Button';
import About from './About'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home=()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
      arrows:false
         };
    return(
      <>
      <Header/>
        <div>
        <Slider {...settings}>
          <div className="image">
           <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt=""/>
           <div className="overlay">
             <h2>Something something something 1</h2>
             <Button> Learn more</Button>
           </div>
          </div>
          <div className="image">
           <img src="https://i.pinimg.com/originals/45/74/c6/4574c68d814dc0d3a64611ee401ea7dc.jpg" alt=""/>
           <div className="overlay">
           <h2>Something something something 1</h2>
           <Button> Learn more</Button>
           </div>
          </div>
          <div className="image">
           <img src="https://wallpaperaccess.com/full/475846.jpg" alt=""/>
           <div className="overlay">
           <h2>Something something something 1</h2>
           <Button> Learn more</Button>
           </div>
          </div>
          <div className="image">
           <img src="https://www.hdcarwallpapers.com/walls/range_rover_sport_hst_2019_4k-HD.jpg" alt=""/>
           <div className="overlay">
           <h2>Something something something 1</h2>
           <Button> Learn more</Button>
           </div>
          </div>
        </Slider>
       <div className="aboutSection">
       <About/>
       </div>
      </div>
      <Footer/>
</>
    )
}

export default Home;