import Navigationbar from "./navbar";
import Banner from "./banner";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Suites (){
    return(
        <div>
            <Navigationbar/>
            <Banner/>
            <div>
            <CardGroup>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./Hotel pics/roomSunset.jpg" />
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
        <Card.Img variant="top" src="./Hotel pics/Skybar1.jpg" />
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
        <Card.Img variant="top" src="./Hotel pics/cape-town.jpg" style={{}}/>
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
        <Card.Img variant="top" src="./Hotel pics/foodCover.jpg" />
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
            </div>
        </div>

    );
};
export default Suites;