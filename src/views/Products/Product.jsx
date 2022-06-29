import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Spinner} from 'react-bootstrap';

const Product = () => {
  const urlParams = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const [product, setProduct] = useState({});

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  console.log("param", urlParams);

  console.log(product);

  return (
    <div>
      {product ? (
        // <h1 className="my-5 text-center">Product id {product.id} works!!</h1>
        <div className="d-flex justify-content-center">
            <Card className="my-5 p-3" style={{ width: '450px'}}>
                <Card.Img className="w-50 mx-auto" variant="top" src={product.image} alt={`${product.title} image`} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <hr />
                    <Card.Text>{product.description}</Card.Text>
                    <hr />
                    <Card.Text>{product.category}</Card.Text>
                    <hr />
                    <Card.Text>Price {product.price}$</Card.Text>
                    <Button className="btn-lg mt-3" variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>

      ) : (
      <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Product;
