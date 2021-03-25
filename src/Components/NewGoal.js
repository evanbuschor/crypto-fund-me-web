import React, { useState, useEffect } from "react";

const NewGoal = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [addr, setAddr] = useState("");
    const [amount, setAmount] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            //TODO change out the URL for a URL derived from an env variable
            await fetch(`http://localhost:3000/goals/`, {
                method: "POST",
                body: JSON.stringify({ title, description, addr, amount }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Funding Goal Title:
                    <input
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        id="title"
                        type="text"
                        value={title}
                    />
                </label>
                <label htmlFor="description">
                    Description:
                    <textarea
                        id="description"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        value={description}
                    />
                </label>
                <label htmlFor="addr">
                    Wallet Address:
                    <input
                        id="addr"
                        type="text"
                        onChange={(e) => {
                            setAddr(e.target.value);
                        }}
                        value={addr}
                    />
                </label>
                <label htmlFor="amount">
                    Goal amount:
                    <input
                        id="amount"
                        type="text"
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        value={amount}
                    />
                </label>
                <button>submit</button>
            </form>
        </div>
    );
};

export default NewGoal;
