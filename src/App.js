import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import ComponentMainSection from "./components/ComponentMainSection.jsx";
import ComponentSideBar from "./components/ComponentSideBar.jsx";
import SectionList from "./components/SectionList.jsx";
import Player from "./components/Player.jsx";

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={0} md={4} lg={3} className="p-0 ">
            <ComponentSideBar />
          </Col>

          <Col xs={12} md={8} lg={9}>
            <SectionList />
            <h2>Your favourites</h2>
            <ComponentMainSection artist={"queen"} />
            <h2>Most liked</h2>
            <ComponentMainSection artist={"annihilator"} />
            <h2>Other artists</h2>
            <ComponentMainSection artist={"dissection"} />
          </Col>
        </Row>
      </Container>
      <footer>
        <Player />
      </footer>
    </div>
  );
}

export default App;
