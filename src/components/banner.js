import Carousel from 'react-bootstrap/Carousel';
import pic from "./assets/suite.jpg";
import pic1 from "./assets/lobby.jpg";
import pic2 from "./assets/fun-things.jpg";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;