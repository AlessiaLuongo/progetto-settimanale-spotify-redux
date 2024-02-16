import { Button, Form, InputGroup, Nav, Navbar } from "react-bootstrap";

const ComponentSideBar = () => {
  return (
    <Navbar
      className="navbar sidebar d-none d-md-flex flex-column justify-content-between"
      bg="dark"
      data-bs-theme="dark"
    >
      <div className="p-3">
        <Navbar.Brand href="#">
          <div>
            <img src="/logo/logo.png" alt="logo" width="150px" height="60px" />
          </div>
        </Navbar.Brand>

        <Nav className="flex-column ">
          <Nav.Link href="#">
            <i className="bi bi-house-door-fill me-1"></i>Home
          </Nav.Link>
          <Nav.Link href="#">
            <i className="bi bi-book-fill"></i>Your Library
          </Nav.Link>
        </Nav>

        <Form>
          <InputGroup>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              className="bg-light"
            />
            <InputGroup.Text id="basic-addon1">GO</InputGroup.Text>
          </InputGroup>
        </Form>
      </div>

      <div>
        <Nav className="d-flex flex-column justify-content-center align-items-center">
          <Nav.Link href="#">
            <Button variant="light">Sign Up</Button>
          </Nav.Link>
          <Nav.Link href="#">
            <Button variant="dark" className="border-light">
              LOGIN
            </Button>
          </Nav.Link>
          <div className="d-flex">
            <Nav.Link href="#">Cookie Policy</Nav.Link>
            <Nav.Link href="#">Privacy</Nav.Link>
          </div>
        </Nav>
      </div>
    </Navbar>
  );
};

export default ComponentSideBar;