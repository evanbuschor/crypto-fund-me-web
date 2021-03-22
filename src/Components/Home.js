import React from "react";
import heroSVG from "../assets/undraw_send_gift.svg";
import cryptoSVG from "../assets/crypto.svg";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();
    function handleClick() {
        history.push("./donate");
    }
    return (
        <div className="home">
            <div className="hero__slogan">
                <h1 className="hero__text">The Selfless Donation Platform</h1>
                <button className="hero__button" onClick={handleClick}>
                    View Goals
                </button>
            </div>
            <img
                className="hero__image"
                src={heroSVG}
                alt="hero banner transaction"
            ></img>

            <img
                className="under-hero__image"
                src={cryptoSVG}
                alt="crypto token"
            ></img>
            <div className="under-hero__slogan">
                <h2 className="under-hero__text">
                    Crypto Fund Me uses the public Bitcoin ledger to track
                    anonymous funding goals.{" "}
                </h2>
            </div>
        </div>
    );
};

export default Home;
