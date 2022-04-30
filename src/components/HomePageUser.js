import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

export class HomePageUser extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">
              Welcome to User Dashboard!
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>Login as a User to view list of products</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <Link to="/products" className="button btn project-btn">
                  <i className="fa fa-book"></i>List Products
                </Link>
              </ul>
            </Fade>
          </div>
        </div>
      </header>
    );
  }
}
