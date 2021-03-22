import React, { useEffect, useState } from "react";
import GoalCard from "./GoalCard";

const goalData = [
    {
        id: 4783297438291047,
        title: "New graphics card",
        addr: "15uow3CrKLc7zzExzVRHn7GtZJaDqgKxz9",
        desc:
            "my current graphics card died and I'm looking for a replacement.",
        amount: 0.02,
        startDate: Date.now(),
    },
    {
        id: 4783297438291047,
        title: "Need new tires",
        addr: "15uow3CrKLc7zzExzVRHn7GtZJaDqgKxz9",
        desc:
            "I'm about to go visit my family that lives 5 states way. My tires are in very poor condition and I'm worried they won't make the trip.",
        amount: 0.04,
        startDate: Date.now(),
    },
];

const Donate = () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        setGoals(goalData);
    }, []);

    return (
        <div>
            {goals.map((goal) => {
                return <GoalCard {...goal}></GoalCard>;
            })}
        </div>
    );
};

export default Donate;
