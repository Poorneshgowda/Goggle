// Navbar.js
import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <h3 className="navbar-brand" to="/home">Goggles</h3>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                
                <li className="nav-item">
                    <Link className="nav-link" to="/">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/product">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
            <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
        </div>
          
        </nav>
    </div>
  );
};

export default Navbar;
