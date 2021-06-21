import React, { useState, useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import Slider from "react-slick";
import "./style/SingleItem.css";
import Header from '../components/Header'
import Footer from '../components/Footer'


const SingleItem = ({ match }) => {
  var [product, setProduct] = useState([]);
  var [images,setimages]=useState([]);

  const getProduct = async () => {
    const res = await fetch(`http://localhost:3000/products/${match.params.id}`);
    const json = await res.json();
    setProduct(json);
    const im= await product;
    setimages(im.image)
  };

  useEffect(() => {
    getProduct();
  },[images]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");

  const openZoomModal=(e)=>{
    modal.style.display = "block";
    modalImg.src = e;
  }

  const closeModal=()=>{
    modal.style.display = "none";
  }
  return (
    <>
    <Header/>
    <Container>
      <Row className="my-5 imgRow">
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        {images!==undefined  &&  <div className="ImageGallery">
          <div  className="bigImage"><Slider {...settings}>
            
          {images.map((e)=>( <img alt={product.name} key={e} src={e}/>))}
            </Slider> </div>
         <div className="smallImages"> {images.map((e,index)=>(<img id={index} onClick={()=>openZoomModal(e)} alt={product.name} key={e} src={e}/>))}</div>
          </div>}         
        </Col>      
      </Row>
    <Row className="heading">
    <Col className="name" xl={6} lg={6} md={6} sm={12} xs={12}>
      {product.name}
    </Col>
    <Col className="price" xl={6} lg={6} md={6} sm={12} xs={12}>
      ${product.price}
    </Col>
    </Row>
    <Row className="my-3 info">
    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
      <ul>
        <li> <strong>Year:</strong> <p>{product.year}</p> </li>
        <li> <strong>Make:</strong> <p>jkdfilefvbikf </p> </li>
        <li> <strong>Model:</strong> <p>{product.brand}</p> </li>
        <li> <strong>Trim:</strong> <p>dfvfvedv</p> </li>
        <li> <strong>Engine:</strong> <p>{product.Engine}</p> </li>
      </ul>
    </Col>
    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
      <ul>
      <li> <strong>Fuel type:</strong> <p>Diesel</p> </li>
        <li> <strong>Transmission:</strong> <p>sethsrthsrt</p> </li>
        <li> <strong>Color:</strong> <p>{product.Color}</p> </li>
        <li> <strong>Mileage:</strong> <p>{product.mileage}</p> </li>
        <li> <strong>Vin:</strong> <p>srgrfgvr</p> </li>
        </ul>
    </Col>
    </Row>
    <Row className="my-3 mb-5 desc">
      <Col>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolorem fuga quia harum enim cum hic ullam ad veritatis, architecto, dignissimos totam consequatur labore voluptatum fugit qui saepe ducimus optio.
      Vero nihil non itaque neque esse veritatis magnam ducimus eligendi quo, nesciunt, dolorum vel quidem! Corporis, culpa? Fugiat esse aspernatur perspiciatis maxime asperiores, amet atque delectus repudiandae nihil hic voluptate.</p>
      </Col>
    </Row>
    </Container>
    <div id="myModal" className="modal">
    <span onClick={closeModal} className="close">&times;</span>
    <img alt="product" className="modal-content" id="img01" />
    </div>
    <Footer/>
    </>
  );
};

export default SingleItem;

