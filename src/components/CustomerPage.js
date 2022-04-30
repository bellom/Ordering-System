import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

export class CustomerPage extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <div className="row banner">
          <div className="banner-text">

            <Fade bottom duration={1200}>
              <h3>
                Find list of our Customers below
                {/* api call to fetch customers */}
              </h3>
            </Fade>
            <hr />
          </div>
        </div>
      </header>
    );
  }
}
