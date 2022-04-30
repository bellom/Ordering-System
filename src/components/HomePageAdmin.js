import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

export class HomePageAdmin extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">
                Welcome to Admin Dashboard!
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>
                Login as an Admin to view list of customers, products and orders
              </h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <Link to="/employees" className="button btn project-btn">
                  <i className="fa fa-book"></i>List Employees
                </Link>
                <Link to="/customers" className="button btn github-btn">
                  <i className="fa fa-book"></i>List Customers
                </Link>
              </ul>
              <ul className="social">
                <Link to="/products" className="button btn project-btn">
                  <i className="fa fa-book"></i>List Products
                </Link>
                <Link to="/orders" className="button btn github-btn">
                  <i className="fa fa-book"></i>List Orders
                </Link>
              </ul>
            </Fade>
          </div>
        </div>
      </header>
    );
  }
}
