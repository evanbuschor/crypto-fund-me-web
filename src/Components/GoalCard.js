import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import ProgressBar from "./ProgressBar";

const GoalCard = ({ id, title, addr, desc, goalAmount, startDateUTC }) => {
    const [balance, setBalance] = useState(0);
    const [loadingBalance, setLoadingBalance] = useState(true);

    useEffect(() => {
        updateAddressBalance();
    }, []);

    async function updateAddressBalance() {
        const { addr, confirmedBalance } = await fetchAddressDetails();
        setBalance(confirmedBalance);
        setLoadingBalance(false);
    }

    async function fetchAddressDetails() {
        try {
            const response = await fetch(
                `https://chain.so/api/v2/get_address_balance/BTC/${addr}`
            );
            const { data } = await response.json();
            console.log("data", data);
            return {
                addr: data.address,
                confirmedBalance: data.confirmed_balance,
            };
        } catch (err) {
            console.error(err);
        }
    }

    function renderProgressBar() {
        if (loadingBalance) {
            return <div>loading...</div>;
        } else {
            return (
                <>
                    <h3>{`Progress: ${balance}/${goalAmount}`}</h3>
                    <ProgressBar
                        className="progressBar"
                        value={balance}
                        max={goalAmount}
                    ></ProgressBar>
                </>
            );
        }
    }

    return (
        <div className="goal-card">
            <h1>{title}</h1>
            <h2>{`₿${goalAmount} BTC  (${addr})`}</h2>
            <QRCode value={addr} size={200}></QRCode>
            <p>{desc}</p>
            <h4>
                Posted on: {new Date(startDateUTC).toLocaleDateString("en-US")}
            </h4>
            {renderProgressBar()}
        </div>
    );
};

export default GoalCard;
