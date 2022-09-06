import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pic from "./assets/room.jpg";
import pic1 from "./assets/Skybar1.jpg";
import pic2 from "./assets/cape-town.jpg";
import pic3 from "./assets/foodCover.jpg";

function CardSection() {
  return (
    <CardGroup>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
        <Card.Title>Suites & rooms</Card.Title>
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
        <Card.Title>A Sense of Place</Card.Title>
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
        <Card.Title>Explore the city</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Explore</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic3} />
        <Card.Body>
        <Card.Title>Exquisite Dining</Card.Title>
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

export default CardSection;