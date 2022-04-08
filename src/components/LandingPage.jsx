import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

export class LandingPage extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">
                Welcome to Northwind Database
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>
                Login as an Admin to view list of customers, products and orders
              </h3>
              <h3>Login as a User to view list of products</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="google.com" className="button btn project-btn">
                  <i className="fa fa-book"></i>Login as Admin
                </a>
                <a href="google.com" className="button btn github-btn">
                  <i className="fa fa-book"></i>Login as User
                </a>
              </ul>
            </Fade>
          </div>
        </div>
      </header>
    );
  }
}