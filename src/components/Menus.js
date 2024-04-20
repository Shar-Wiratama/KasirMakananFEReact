import { Col,Card, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

export const Menus = ({ menu }) => {
  return (
    <Col md="4" xs="6" className="mb-4">
    <Card className="shadow">
      <Card.Img variant="top" src= {"assets/Pictures/" + menu.category.nama.toLowerCase()+"/"+menu.gambar} />
      <Card.Body>
        <Card.Title>{menu.nama} <strong>[{menu.kode}]</strong></Card.Title>
        <Card.Text>
          Rp. {numberWithCommas(menu.harga)}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  );
};
