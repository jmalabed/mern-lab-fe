import { Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Product from "./components/ProductShow";
import ProductsContainer from "./components/ProductsContainer";
import AddProductContainer from "./components/AddProductContainer";
import ProductShow from "./components/ProductShow";
import EditForm from "./components/EditForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


function App() {
  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/products">Rock & Roll</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/products">Home</Nav.Link>
              <Nav.Link href="/products/new">Add New Product</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="justify-content-end">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="main">



        <Switch>
          <Route exact path="/products" component={ProductsContainer} />
          <Route
            exact
            path="/products/add"
            render={(routerProps) => <AddProductContainer {...routerProps} />}
          ></Route>
          <Route
            exact
            path="/products/:id"
            component={(routerProps) => <ProductShow {...routerProps} />}
          />
          <Route
            exact
            path="/products/:id/edit"
            render={(routerProps) => <EditForm {...routerProps} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
