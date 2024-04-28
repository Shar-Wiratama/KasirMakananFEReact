import React, { Component } from "react";

import NavbarComponents from "./components/NavbarComponents";
import ListCategories from "./components/ListCategories";
import { Row, Col, Container } from "react-bootstrap";
import PaymentComponent from "./components/PaymentComponent";
import { API_URL } from "./utils/constants";
import axios from "axios";
import { Menus } from "./components/Menus";
import swal from "sweetalert";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      chooseCategory: "Makanan Berat", 
      carts: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.chooseCategory)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });

      axios
      .get(API_URL + "carts")
      .then((res) => {
        const carts = res.data;
        this.setState({ carts });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevState) {
    if(this.state.carts !== prevState.carts){
      axios
      .get(API_URL + "carts")
      .then((res) => {
        const carts = res.data;
        this.setState({ carts });
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

  changeCategory = (value) => {
    this.setState({ 
      chooseCategory: value,
      menus: [] 
    });

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addCarts = (value) => {
    // console.log("Menu:", value);
    
    axios
      .get(API_URL + "carts?product.id=" + value.id)
      .then((res) => {
        if   (res.data.length === 0){ 
          const cart ={
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          }
      
          axios
          .post(API_URL + "carts",cart)
          .then((res) => {
            swal({
              title: "Sukses",
              text: "items " + cart.product.nama +" telah masuk keranjang",
              icon: "success",
              button: false,
              timer: 1000,
            });
          })
          .catch((error) => {
            console.log(error);
          });
        }else {
          const cart ={
            jumlah: res.data[0].jumlah+1,
            total_harga: res.data[0].total_harga+value.harga,
            product: value,    
          }
          axios
          .put(API_URL + "carts/"+res.data[0].id,cart )
          .then((res) => {
            swal({
              title: "Sukses",
              text: "items " + cart.product.nama +" telah masuk keranjang",
              icon: "success",
              button: false,
              timer: 1000,
            });
          })
          .catch((error) => {
            console.log(error);
          });
        }
      })
      .catch((error) => { 
        console.log(error);
      });

   
  }

  render() {
    // console.log(this.state.menus);
    const { menus, chooseCategory, carts} = this.state;
    return (
      <div className="App">
        <NavbarComponents />
        <div className="mt-2">
          <Container fluid>
            <Row>
              <ListCategories changeCategory= {this.changeCategory} chooseCategory= {chooseCategory}/>
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row>
                  {menus &&
                    menus.map((menu) => <Menus 
                    key={menu.id} 
                    menu={menu} 
                    addCarts={this.addCarts}
                    />
                    )}
                </Row>
              </Col>
              <PaymentComponent carts={carts} />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
