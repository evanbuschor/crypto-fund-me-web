import React, { useEffect } from "react";
import QRCode from "react-qr-code";
import ProgressBar from "./ProgressBar";

const GoalCard = ({ id, title, addr, desc, amount, startDateUTC }) => {
    useEffect(() => {
        fetchAddressDetails();
    }, []);

    async function fetchAddressDetails() {
        try {
            const response = await fetch(
                `https://api.blockcypher.com/v1/btc/main/addrs/${addr}/balance`,
                {
                    method: "GET",
                    mode: "no-cors",
                }
            );

            console.log("response", response);

            const jsonData = await response.json();

            console.log("address details", jsonData);
        } catch (err) {
            console.log("error", err);
        }
    }
    return (
        <div className="goal-card">
            <h1>{title}</h1>
            <h2>{`₿${amount} BTC  (${addr})`}</h2>
            <QRCode value={addr} size={200}></QRCode>
            <p>{desc}</p>
            <h4>
                Posted on: {new Date(startDateUTC).toLocaleDateString("en-US")}
            </h4>
            <ProgressBar className="progressBar" value={0}></ProgressBar>
        </div>
    );
};

export default GoalCard;
