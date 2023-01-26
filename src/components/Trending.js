import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import jokerImage from '../assets/images/trending/joker.jpg';
import duneImage from '../assets/images/trending/dune.jpg';
import everythingImage from '../assets/images/trending/everything.jpg';
import infiniteImage from '../assets/images/trending/infinite.jpg';
import lightyearImage from '../assets/images/trending/lightyear.jpg';
import morbiusImage from '../assets/images/trending/morbius.jpg';

const Trending = () => {
  return (
    <div>
      <Container id="trending">
        <br />
        <br />
        <h1 className="text-white mb-4">TRENDING MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jokerImage} alt="Joker Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">JOKER</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DUNO MOVIES</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={everythingImage} alt="Everything Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">EVERYTHING</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={infiniteImage} alt="Infinite Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INFINITE MOVIES</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={morbiusImage} alt="Morbius Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MORBIUS</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={lightyearImage} alt="Lightyear Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">LIGHTYEAR</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
