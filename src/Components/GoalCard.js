import React from "react";
import QRCode from "react-qr-code";

const GoalCard = ({ id, title, addr, desc, amount, startDate, ...rest }) => {
    return (
        <div className="goal-card">
            <h1>{title}</h1>
            <h2>{`₿${amount} BTC  (${addr})`}</h2>
            <QRCode value={addr} size="200"></QRCode>
            <p>{desc}</p>
        </div>
    );
};

export default GoalCard;
