import React, { Component } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

export default class PaymentComponent extends Component {
  render() {
    const { carts } = this.props;
    return (
      <Col md="2" mt="2">
        <h4>
          <strong>Hasil</strong>
        </h4>
        <hr />
        {carts.length !== 0 && (
          <ListGroup variant="flush">
            {carts.map((menuCarts) => (
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Badge pill bg= "success">
                      {menuCarts.jumlah}
                    </Badge>
                  </Col>
                  <Col>
                  <h5>{menuCarts.product.nama}</h5>
                  <p>Rp. {numberWithCommas (menuCarts.product.harga)}</p>
                  </Col>
                  <Col>
                  <strong className="float-right">Rp. {numberWithCommas (menuCarts.total_harga)}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    );
  }
}
