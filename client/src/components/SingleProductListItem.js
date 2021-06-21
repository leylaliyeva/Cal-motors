import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./style/SingleProductListItem.css"

const { Meta } = Card;

const SingleProductListItem = ({ product }) => {
    const gridStyle = {
        width: 'auto',
        textAlign: 'left',
      };
    
      
  // destructure
  const { images, title, fuel, color,  description, slug, category, subs, engine, year, mileage, price, condition } = product;
  return (
    <Card
    title={title}
    className="mb-5 p-0 display-flex flex-column"
      actions={[
          <strong style={{color:"red"}}><i>{price} $</i></strong>,
        <Link to={`/product/${slug}`}>
          <EyeOutlined className="text-warning" /> View Detailed
        </Link>
      ]}
    >
         <Card.Grid className="p-1" style={gridStyle}> <img
          src={images && images.length ? images[0].url : ""}
          style={{ width:"200px", height:"200px", objectFit:"contain" }}
          className="p"
        /></Card.Grid>
        <Card.Grid style={gridStyle}>
    <div className="data">   
    
    Condition : {condition} <br/>
           Engine : {engine} <br/>
           Color : {color} <br/>
           Fuel : {fuel}
   
    <hr/>
    
       {description}
   
 </div>

        </Card.Grid>
      
      
    </Card>
  );
};

export default SingleProductListItem;
