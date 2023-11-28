
import React, { useRef } from 'react';
import "./product.css"; // Make sure to import your CSS file
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Product = () => {
  const cardContainerRef = useRef(null);
  const products = [
    { 
      id: 1, 
      name: 'Product 1', 
      description: 'Description of Product 1', 
      price: 400, 
      imageUrls: 
        'https://cdn.eyemyeye.com/shared/images/products/S35A5535/S35A5535-2.jpg',
    },
    
       
  
]
//   const scrollCards = (direction) => {
//     const container = cardContainerRef.current;
//     const scrollAmount = 200; // Adjust as needed

//     if (container) {
//       if (direction === 'left') {
//         container.scrollLeft -= scrollAmount;
//       } else if (direction === 'right') {
//         container.scrollLeft += scrollAmount;
//       }
//     }
//   };

  return (
    <>
   
 <header class="bg-light text-dark text-center py-1">
            <h3> Our Products</h3>
        </header>
    
<div className="featured-products" id="products">
<div className="container">
        <h2>featured Products</h2>
    <Row xs={2} sm={2} md={3} lg={5} className="g-5">
      {products.map((product) => (
        <>
        <Col key={product.id}>
          <Card  className="product-card">
            <Card.Img variant="top" src={product.imageUrls} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price: {product.price}</Card.Text>
              <button className="btn btn-primary">Buy</button>
              <button className="btn btn-success">Cart</button>
            </Card.Body>
          </Card>
        </Col>
            <Col key={product.id}>
            <Card  className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body >
            </Card >
          </Col>
          <Col key={product.id}>
            <Card  className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   <Col key={product.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   <Col key={product.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   <Col key={product.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   <Col key={product.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   
          <Col key={product.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   
          <Col key={product.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   
          <Col key={product.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   
          <Col key={product.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   
          <Col key={product.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   
          <Col key={product.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   
          <Col key={product.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   
          <Col key={product.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrls} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-success">Cart</button>
              </Card.Body>
            </Card>
          </Col>   
          </>
      ))}
    </Row>
    </div>
    </div>
    <div className="featured-products" id="products">
      <div className="container">
        <h2>Choose Products</h2>

          {/* <button className="scroll-btn-left" onClick={() => scrollCards('left')}>&#9665;</button>
          <button className="scroll-btn" onClick={() => scrollCards('right')}>&#9655;</button> */}

        <div className="card-container" ref={cardContainerRef}>
          <div className="card-deck">
            {/* Your card components go here */}
            {/* Example card */}
            <div className="card mb-4">
              <img src="https://cdn.eyemyeye.com/shared/images/products/S35A5535/S35A5535-2.jpg" className="card-img-top" alt="Image1" />
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of Image 1.</p>
              </div>
            </div>
            <div className="card mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjE_7YKJgbRYA3E0azSATf3esJD0i3fFGZOg&usqp=CAU" className="card-img-top" alt="Image1" />
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of Image 1.</p>
              </div>
            </div>  <div className="card mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1qY1LZdaLWoroVWN-k7SQIzGRxQWS7rThQ&usqp=CAU" className="card-img-top" alt="Image1" />
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of Image 1.</p>
              </div>
            </div>  <div className="card mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gnxfHkuoxl3lPFG6pyRVviY6NRUG-DVJ-g&usqp=CAU" className="card-img-top" alt="Image1" />
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of Image 1.</p>
              </div>
            </div>  <div className="card mb-4">
              <img src="https://cdn.eyemyeye.com/shared/images/products/S35A5535/S35A5535-2.jpg" className="card-img-top" alt="Image1" />
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of Image 1.</p>
              </div>
            </div>  <div className="card mb-4">
              <img src="https://cdn.eyemyeye.com/shared/images/products/S35A5535/S35A5535-2.jpg" className="card-img-top" alt="Image1" />
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of Image 1.</p>
              </div>
            </div>  <div className="card mb-4">
              <img src="https://cdn.eyemyeye.com/shared/images/products/S35A5535/S35A5535-2.jpg" className="card-img-top" alt="Image1" />
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of Image 1.</p>
              </div>
            </div>  <div className="card mb-4">
              <img src="https://cdn.eyemyeye.com/shared/images/products/S35A5535/S35A5535-2.jpg" className="card-img-top" alt="Image1" />
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of Image 1.</p>
              </div>
            </div>  <div className="card mb-4">
              <img src="https://cdn.eyemyeye.com/shared/images/products/S35A5535/S35A5535-2.jpg" className="card-img-top" alt="Image1" />
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of Image 1.</p>
              </div>
            </div>  <div className="card mb-4">
              <img src="https://cdn.eyemyeye.com/shared/images/products/S35A5535/S35A5535-2.jpg" className="card-img-top" alt="Image1" />
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of Image 1.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="bg-dark text-light text-center py-2">
            <p>&copy; 2023 Goggles - page
          <br></br>
            www.goggles.com
            </p>
        </footer>
   </>

  );
};

export default Product;
