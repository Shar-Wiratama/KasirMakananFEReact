import { Col,Card, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

export const Menus = ({ menu, addCarts }) => {
  return (
    <Col md="4" xs="6" className="mb-4">
    <Card className="shadow" onClick={()=> addCarts(menu)}>
      <Card.Img variant="top" src= {"assets/Pictures/" + menu.category.nama.toLowerCase()+"/"+menu.gambar} />
      <Card.Body>
        <Card.Title>{menu.nama} <strong>[{menu.kode}]</strong></Card.Title>
        <Card.Text>
          Rp. {numberWithCommas(menu.harga)}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default Menus;
