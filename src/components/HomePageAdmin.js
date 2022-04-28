import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

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
          </div>
        </div>
      </header>
    );
  }
}
