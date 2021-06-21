import React from "react";
import "./style/About.css";
import Header from '../components/Header'
import Footer from '../components/Footer'
const About = () => {
  return (
    <>
    <Header/>
    <div className="aboutSection container">
      {/* <h1> About us</h1> */}
      <img src="https://wallpaperaccess.com/full/9860.jpg" alt="" />
      <p>
        
        deleniti maiores libero, officiis corrupti nam adipisci voluptatem
        aliquam rerum laboriosam, labore qui aspernatur nesciunt cupiditate
        accusantium! Aut, sit eum. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur velit distinctio doloremque dolore iure,
        assumenda ducimus placeat error facere eligendi perferendis asperiores
        reprehenderit quasi explicabo perspiciatis dolor quibusdam eaque
        porro?Veniam, in similique delectus assumenda sed deserunt fugit magni
        iste et recusandae, molestias praesentium voluptas quam! Eligendi ad
        reprehenderit nemo mollitia repellat, iste sed totam aspernatur,
        doloremque asperiores aperiam quia!
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default About;
