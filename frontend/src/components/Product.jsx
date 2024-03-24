import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Button from 'react-bootstrap/Button';

export default function Product(prop) {
  console.log('Props', JSON.stringify(prop, null, 2));
  const { product } = prop;

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

/* 

[1] use Link to prevent page from refreshing


*/
