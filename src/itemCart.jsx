/* eslint-disable react-hooks/rules-of-hooks */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from "react-use-cart"

function itemCart(props) {

    const { addItem } = useCart()

    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 m-b-4'>
            <Card style={{ width: '18rem', margin: 15 }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        ${props.price}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>addItem(props.item)}>Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default itemCart;