import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pic from "./assets/room3.jpg";
import pic1 from "./assets/family time.jpg";
import pic2 from "./assets/business trip.jpg";

function Specials() {
  return (
    <CardGroup>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
        <Card.Title>Honeymoon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Explore</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic1} />
        <Card.Body>
        <Card.Title>Family Time</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Explore</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic2} />
        <Card.Body>
        <Card.Title>Business Trip</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Explore</Button>
        </Card.Body>
        </Card>
    </CardGroup> 

    
  );
}

export default Specials;