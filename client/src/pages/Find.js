import React ,{useState,useEffect}from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleProductListItem from "../components/SingleProductListItem";
import "./style/Find.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getProducts, getProductsCount } from "../functions/product";
import { Pagination } from "antd";



const Find = () => {
  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadAllProducts();
  }, [page]);

  useEffect(() => {
    getProductsCount().then((res) => setProductsCount(res.data.length));
  }, []);

  const loadAllProducts = () => {
    // sort, order, limit
    getProducts("createdAt", "desc", page).then((res) => {
      setProducts(res.data);
    });
  };


  return (
    <>
    <Header/>
    <Container className="my-2">
    
      <Row>
        <Col md={3} lg={3} xl={3}>
         
        </Col>

        <Col md={9} lg={9} xl={9}>
          <Row>
            {products.map((product) => (
              <Col key={product._id} xs={12} sm={12} md={12} lg={12} xl={12}>
                <SingleProductListItem product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <div className="row">
        <nav className="col-md-4 offset-md-4 text-center pt-5 p-3">
          <Pagination
            current={page}
            total={(productsCount / 3) * 10}
            onChange={(value) => setPage(value)}
          />
        </nav>
      </div>
    </Container>
    <Footer/>
    </>
  );
};

export default Find;
