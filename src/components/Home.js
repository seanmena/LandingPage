import React, { useState } from "react";
import img from "../assets/images/image-web-3-desktop.jpg";
import "./Home.css";
import one from "../assets/images/image-retro-pcs.jpg";
import two from "../assets/images/image-top-laptops.jpg";
import three from "../assets/images/image-gaming-growth.jpg";
import logo from "../assets/images/logo.svg";

export default function Home() {
  const [click, setClick] = useState(false);

  const clickOff = console.log("this should be off");

  const handleClick = () => setClick(!click);

  window.addEventListener("resize", clickOff);

  return (
    <div>
      <div>
        <div className={click ? "hide-me" : "hamburger"} onClick={handleClick}>
          <div className="burger burger1" />
          <div className="burger burger2" />
          <div className="burger burger3" />
        </div>

        <div className={click ? "x-p" : "hide-me"} onClick={handleClick}>
          <div className="x x1" />
          <div className="x x2" />
        </div>

        <div
          className={
            click ? "blur-me navbar-logo-mobile" : "navbar-logo-mobile"
          }
        >
          <img src={logo} alt="webpage logo" />
        </div>
        <div id="nav-box" className={click ? "nav-menu active " : "nav"}>
          <div className="navbar-logo">
            <img src={logo} alt="webpage logo" />
          </div>
          <li className="nav-item nav-item1">
            <a href="/LandingPage">Home</a>
          </li>
          <li className="nav-item">
            <a href="/LandingPage">New</a>
          </li>
          <li className="nav-item">
            <a href="/LandingPage">Popular</a>
          </li>
          <li className="nav-item">
            <a href="/LandingPage">Trending</a>
          </li>
          <li className="nav-item">
            <a href="/LandingPage">Categories</a>
          </li>
        </div>
      </div>

      <div className={click ? "blur-me home" : "home"}>
        {/* cont one */}
        <div className="geo-img">
          <img className="direct" src={img} alt="geometry"></img>
        </div>

        <h1 className="card-title">The Bright Future of Web 3.0?</h1>

        <p className="card-text">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="card-btn">READ MORE</button>

        {/* cont two */}
        <div className="containerTwo">
          <h1 className="card2-title">New</h1>

          <a href="/LandingPage" className="sub-title">
            Hydrogen VS Electric Cars
          </a>

          <p href="/LandingPage" className="small-text one">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>

          <div className="line"></div>

          <a href="/LandingPage" className="sub-title">
            The Downsides of AI Artistry
          </a>

          <p href="/LandingPage" className="small-text two">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>

          <div className="line"></div>

          <a href="/" className="sub-title">
            Is VC Funding Drying Up?
          </a>

          <p className="small-text three">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>

        {/* cont three */}
        <div className="num-one">
          <img className="baby-img" src={one} alt="retro computer" />
          <h1 className="vid-title">01</h1>

          <h2 className="vid-sub">Reviving Retro PCs</h2>

          <p className="vid-text">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>

        <div className="num-two">
          <img className="baby-img" src={two} alt="tops of laptops" />

          <h1 className="vid-title">02</h1>

          <h2 className="vid-sub">Top 10 Laptops of 2022</h2>

          <p className="vid-text">
            Our best picks for various needs and budgets.
          </p>
        </div>

        <div className="num-three">
          <img className="baby-img" src={three} alt="playstation control" />
          <h1 className="vid-title">03</h1>

          <h2 className="vid-sub">The Growth of Gaming</h2>

          <p className="vid-text">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>

      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/seanmena" target="_blank" rel="noreferrer">
          {" "}
          Sean Mena
        </a>
        .
      </div>
    </div>
  );
}
