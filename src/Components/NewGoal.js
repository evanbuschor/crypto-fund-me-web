import React from "react";

function handleSubmit(e) {
    e.preventDefault();
    console.log("form submit", e);
}

const NewGoal = () => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Funding Goal Title:
                    <input id="title" type="text" />
                </label>
                <label htmlFor="desc">
                    Description:
                    <textarea id="desc" />
                </label>
                <label htmlFor="wallet">
                    Wallet Address:
                    <input id="wallet" type="text" />
                </label>
                <label htmlFor="ammount">
                    Goal ammount:
                    <input id="ammount" type="text" />
                </label>
                <button>submit</button>
            </form>
        </div>
    );
};

export default NewGoal;
