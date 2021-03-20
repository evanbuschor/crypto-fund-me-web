import React from "react";
import heroSVG from "../assets/undraw_send_gift.svg";
import cryptoSVG from "../assets/crypto.svg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h1 className="hero__text">The Selfless Donation Platform</h1>
            <Link to="/donate">
                <button className="hero__button">View Goals</button>
            </Link>
            <img src={heroSVG} alt="hero banner transaction"></img>

            <img src={cryptoSVG} alt="crypto token"></img>
            <h2>
                Crypto Fund Me uses the public Bitcoin ledger to track anonymous
                funding goals.{" "}
            </h2>
        </div>
    );
};

export default Home;
