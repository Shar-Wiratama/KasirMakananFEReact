import React, { Component } from "react";

import NavbarComponents from "./components/NavbarComponents";
import ListCategories from "./components/ListCategories";
import { Row, Col, Container } from "react-bootstrap";
import PaymentComponent from "./components/PaymentComponent";
import { API_URL } from "./utils/constants";
import axios from "axios";
import { Menus } from "./components/Menus";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // console.log(this.state.menus);
    const { menus } = this.state;
    return (
      <div className="App">
        <NavbarComponents />
        <div className="mt-2">
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row>
                  {menus &&
                    menus.map((menu) => <Menus 
                    key={menu.id} 
                    menu={menu} />
                    )}
                </Row>
              </Col>
              <PaymentComponent />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
