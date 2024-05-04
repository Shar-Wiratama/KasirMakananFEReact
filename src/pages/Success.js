import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Success extends Component {
  render() {
    return (
      <div className="mt-4 text-center"> 
        <h2>Success</h2>
        <p>Terima Kasih Sudah Memesan</p>
        <Button variant="success" as={Link} to="/">
            kembali
        </Button>
      </div>
    );
  }
}
