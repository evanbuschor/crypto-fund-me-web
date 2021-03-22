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
            <h1 className="hero__text">The Selfless Donation Platform</h1>
            <button className="hero__button" onClick={handleClick}>
                View Goals
            </button>
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
